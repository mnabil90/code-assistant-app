import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Topbar from '../global/Topbar'
import UsersGrid from '../scenes/app_setup/UsersGrid';

const Main = props => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box height="100vh">
        <Topbar/>
        <UsersGrid/>
    </Box>
      
  )
}

export default Main
