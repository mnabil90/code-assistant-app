import react ,{useState}from "react";
import { useNavigate } from "react-router-dom";

 import AuthenticationService from "../api/AuthenticationService";
import UserInfoService from "../api/UserInfoService";

import '../assets/css/style.css';
import '../assets/css/all.min.css';
import '../assets/css/bootstrap.css';

import administration from '../assets/images/administration.jpg'
import ezdklogosmall from '../assets/images/ezdklogo-small.jpg'

function LoginComponent(){
    const navigate = useNavigate();
    const [state, setState] = useState({ username: "", password: "",hasLoginFailed:false,showSuccessMessage:false});

    const onChange = (e) => {
      const { name, value, checked, type } = e.target;
      const newVal = type === "checkbox" ? checked : value;
      setState({
        ...state,
        [name]: newVal
      });
    };
    const submitButton = (event) =>{
      event.preventDefault();
      AuthenticationService.executeAuthenticationService(state.username,state.password)
      .then(response => {
        console.log(response)
        AuthenticationService.registerSuccessfulLogin(state.username, response.data.accessToken)
        navigate(`/index`);
      })
      .catch(error => {
          //setState({...state, showSuccessMessage: false,hasLoginFailed:true});
          console.log(error);
      });
    }
    return (
        <div className="Form my-5 mx-5">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src={administration} alt="img" className="img-fluid"/>
                    </div>
                    <div className="col-md-6  py-3 px-3 pt-2">
                        <img src={ezdklogosmall} alt="EZDK Logo" className="ezdkLogo"/>
                        <div className="col-md-12 my-6">
                            <h4>Sign in Oracle - <strong>HR Welfare</strong></h4>
                        </div>
                        <form id="myform" action="login" method="post">
                            <div className="form-row">
                                <div className="col-md-9 user">
                                    <input type="text" className="form-control my-2 p-4" placeholder=" Username" id="username" name="username"
                                       value={state.username} onChange={onChange} required/>
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="col-md-9 pass">
                                    <input type="password" className="form-control my-2 p-4" placeholder=" Password"
                                        id="password" name="password" value={state.password} onChange={onChange} required/>
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="col-md-9">
                                    <button type="submit" value="submit" className="btn1 mt-3 mb-3" onClick={submitButton}>Login</button>
                                </div>
                            </div>
                            <div className="col-md-9 my-4">
                              <p id="result" className="mb-0 text-danger"></p>
                                <p className="mb-0"><strong>Forgot password ?</strong></p>
                                <p className="mb-0">Call 8291 - 8292 and ask for Oracle password.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //   {/* <ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}/>
        //   <ShowLoginSuccessful showSuccessMessage = {this.state.showSuccessMessage}/> */}
        //   <h1>login</h1>
        //     <div className="container">
        //       {state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
        //       {/* {state.showSuccessMessage && <div>Login Successful</div>} */}
        //       UserName: <input type = "text" name="username" value={state.username} onChange={onChange}/>
        //       Password: <input type="password" name="password" value={state.password} onChange={onChange}/>
        //       <button className="btn btn-success" onClick={submitButton}>Login</button>
        //     </div>
        //   </div>

        );
}

export default LoginComponent;