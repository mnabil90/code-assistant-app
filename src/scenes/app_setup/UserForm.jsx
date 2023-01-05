import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Dialog } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { MenuItem } from '@mui/material';

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
}));
  
function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'red',
            }}
          >
            <CloseIcon />
          </IconButton>
      </DialogTitle>
    );
  }

const UserForm = props => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const params = useParams();
    const [state, setState] = useState({
        id: params.id
     });

  const handleClose = () => {
        props.setShowUserFormWin(false);
  }
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <BootstrapDialog
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.showUserFormWin}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
         <Formik 
         onSubmit={handleFormSubmit}
         initialValues={initialValues}
         >
         {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
             <Grid container spacing={2}>
                <Grid item xs={8}>
                <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                border="solid #a9a4a4c9"
                padding ="6px"
                sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
                >
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="User Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.userName}
                    name="userName"
                    error={!!touched.userName && !!errors.userName}
                    helperText={touched.userName && errors.userName}
                    sx={{ gridColumn: "span 2" }}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="password"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.userPassword}
                    name="userPassword"
                    error={!!touched.userPassword && !!errors.userPassword}
                    helperText={touched.userPassword && errors.userPassword}
                    sx={{ gridColumn: "span 2" }}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Full Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.userFullName}
                    name="userFullName"
                    error={!!touched.userFullName && !!errors.userFullName}
                    helperText={touched.userFullName && errors.userFullName}
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Mobile"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.userMobileNum}
                    name="userMobileNum"
                    error={!!touched.userMobileNum && !!errors.userMobileNum}
                    helperText={touched.userMobileNum && errors.userMobileNum}
                    sx={{ gridColumn: "span 2" }}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.userEmail}
                    name="userName"
                    error={!!touched.userEmail && !!errors.userEmail}
                    helperText={touched.userEmail && errors.userEmail}
                    sx={{ gridColumn: "span 2" }}
                />
                
                    <MobileDatePicker
                    label="Active From"
                    inputFormat="YYYY-MM-DD"
                    value={values.userActiveFrom}
                    name="userActiveFrom"
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} sx={{ gridColumn: "span 2" }}/>}
                    />
                    <MobileDatePicker
                    label="To"
                    inputFormat="YYYY-MM-DD"
                    value={values.userActiveTo}
                    name="userActiveTo"
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params}  sx={{ gridColumn: "span 2" }}/>}
                    />
                 
               
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    select
                    label="Change Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.usrPasswordChangeFlag}
                    name="usrPasswordChangeFlag"
                    error={!!touched.usrPasswordChangeFlag && !!errors.usrPasswordChangeFlag}
                    helperText={touched.usrPasswordChangeFlag && errors.usrPasswordChangeFlag}
                    sx={{ gridColumn: "span 2" }}
                >
                    <MenuItem>YES</MenuItem>
                    <MenuItem>NO</MenuItem>
                </TextField>
                
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Status"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.userStatus}
                    name="userStatus"
                    error={!!touched.userStatus && !!errors.userStatus}
                    helperText={touched.userStatus && errors.userStatus}
                    sx={{ gridColumn: "span 2" }}
                />
                </Box>
                
                </Grid>
                <Grid item xs={4}>
                    <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                    border="solid #a9a4a4c9"
                    padding ="6px"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
                    }}
                    >
                        <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Created By"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.createdBy}
                        name="createdBy"
                        sx={{ gridColumn: "span 2" }}
                    />

                    <MobileDatePicker
                    label="Creation Date"
                    inputFormat="YYYY-MM-DD"
                    value={values.creationDate}
                    name="creationDate"
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params}  sx={{ gridColumn: "span 2" }}/>}
                    />

                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Updated By"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastUpdatedBy}
                        name="lastUpdatedBy"
                        sx={{ gridColumn: "span 2" }}
                    />

                    <MobileDatePicker
                    label="Update Date"
                    inputFormat="YYYY-MM-DD"
                    value={values.lastUpdateDate}
                    name="lastUpdateDate"
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params}  sx={{ gridColumn: "span 2" }}/>}
                    />
                    </Box>
                    
                
                </Grid>
            </Grid>
             </LocalizationProvider>
           
          </form>
        )}
            
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </BootstrapDialog>
  )
}

const initialValues = {
    userName: "",
    userPassword: "",
    userFullName: "",
    userMobileNum: "",
    userEmail : "",
    usrPasswordChangeFlag: "",
    userActiveFrom: "",
    userActiveTo: "",
    userStatus: "",
    createdBy: "",
    creationDate: "",
    lastUpdatedBy: "",
    lastUpdateDate: "",
  };

export default UserForm
