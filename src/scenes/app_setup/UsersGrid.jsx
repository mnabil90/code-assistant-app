import React ,{useEffect, useState} from "react"
import { useNavigate, useParams } from "react-router-dom";
import { DataGrid ,GridToolbar,GridToolbarContainer } from "@mui/x-data-grid";

import AppUsersService from "../../api/AppUsersService";
import UserForm from "./UserForm";

const UsersGrid = (props) => {
    const params = useParams();
    const [showUserFormWin, setShowUserFormWin] = useState(false);
    const [state, setState] = useState({ 
        users:[],
        message : null 
    });

    useEffect(() => {
        debugger;
        refreshUsers();
    }, []);

    const refreshUsers = () =>{
        // let user = AuthenticationService.getLoggedInUser();
        AppUsersService.reterieveAll()
        .then(response => {
//            console.log(response);
            setState({...state, users: response.data.data});
        })
        .catch(error => {
            console.log(error);
        });
    }
    const addUser = () => {
        setShowUserFormWin(true);
        // let user = AuthenticationService.getLoggedInUser();
        // navigate(`/todos/-1`);
    }

    function CustomToolbar() {
        return (
          <GridToolbarContainer>
              <button className="btn btn-success" onClick={addUser}>Add</button>
              <button className="btn btn-success" onClick={refreshUsers}>Add</button>
          </GridToolbarContainer>
        );
    }

    const columns = [
        { field: "userId", headerName: "ID", width: 150 },
        { field: "userName", headerName: "Eng Name" , width: 150}
    ];

    const sortModel = [{
        field: "userId",
        sort: "asc"
    }];
    return (
        <>
        <div style={{ height: "50vh" }}>
        
          <DataGrid
          components={{
                Toolbar: CustomToolbar,
            }}
            getRowId={row => row.userId}
            sortingOrder={["desc", "asc"]}
            sortModel={sortModel}
            rows={state.users}
            columns={columns}
            pageSize={100}
            rowHeight={38}
            checkboxSelection
            onSelectionChange={newSelection => {
              console.log(newSelection.rows)
            }}
          />
        </div>
        <UserForm showUserFormWin={showUserFormWin} setShowUserFormWin={setShowUserFormWin}/>
      </>
  )
}


export default UsersGrid
