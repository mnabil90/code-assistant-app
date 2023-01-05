import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {ColorModeContext,useMode} from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import './App.css';

import LoginComponent from "./pages/LoginComponent";
import Main from "./pages/Main";
function App() {
  const [theme,colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
       
          {/* <HeaderComponent/>  */}
          <Routes>
          <Route path="/" exact element={<LoginComponent/>}/>
          <Route path="/login" element={<LoginComponent/>}/>
          <Route path="/index" element={<Main/>}/>
          {/*<Route path="/todos" element={<AuthenticatedRoute><ListTodosComponent/></AuthenticatedRoute>}/>
          <Route path="/todos/:id" element={<AuthenticatedRoute><TodoComponent/></AuthenticatedRoute>}/>
          <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}/>*/}
          {/* <Route path="*" element={<ErrorComponent/>}/>  */}
          {/*<Route path="" Component={}>*/}
          </Routes>
         
        
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
