import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import ErrorIcon from '@mui/icons-material/Error';

import { loginAction } from "../../Redux/login-reducer/login.action";

const LoginForm = ({open,onchange,getprofile}) => {

  const loginstate = useSelector(state => state.loginIn);

  const [alertonlogin,setalertonlogin] = useState(false);

  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState();
  const [isUserLogged,setisUserLogged] = useState(false);
  const [overlayopen,setoverlayopen] = useState(!open);


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginAction(userLogin));
    getprofile();

    setalertonlogin(true);
    console.log("this is on submit", userLogin);
  };
  
  
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };


  if(loginstate.loginStatus || !open) return null

  return ReactDOM.createPortal(
    <div className="login-container">
      <form onSubmit={handleSubmit} className="loginform-container">
        <b>Log in yourself, quickly !</b>
        <h4>Enter your Email and password carefully.</h4>

        <div className="loginform-control">
          {/* <label className="login-labels">Email Id</label> */}
          <input
            className="loginform-input"
            name="username"
            type="Name"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Username"
          />
        </div>
        <div className="loginform-control">
          {/* <label className="login-labels">Email Id</label> */}
          <input
            className="loginform-input"
            name="email"
            type="email"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Email Id"
          />
        </div>
        <div className="loginform-control">
          {/* <label className="login-labels">Password</label> */}
          <input
            className="loginform-input"
            name="password"
            type="password"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="password"
          />
        </div>
        {alertonlogin?
          <p className="error-message"><ErrorIcon className="mui-icon"/>{loginstate.errMessage}</p>:
          null
        }
        <button type="submit" className="login-btn">Login</button>
        <Link to={"/signUp"}>Don’t have an account ?</Link>
      </form>
    </div>,
    document.getElementById('overlay')
  );
    
};

export default LoginForm;
