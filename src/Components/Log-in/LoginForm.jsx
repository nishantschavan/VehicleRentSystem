import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./LoginForm.scss";
import ReactDOM from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import Header from "../Header/header";
import TextField from '@mui/material/TextField';
import axios from "axios";

const LoginForm = ({open,onchange,getprofile}) => {
  const [userLogin, setUserLogin] = useState();
  const [isUserLogged,setisUserLogged] = useState(false);
  const [overlayopen,setoverlayopen] = useState(open);

  const endpoint = '/login';
  // const history = useHistory();
  const handleSubmit = (e) => {
    // history.push("/secondpage");
    console.log(userLogin);
    getprofile();
    onchange(userLogin);

    axios.post(endpoint,userLogin).then(res=>{
      console.log(res);
    })

    e.preventDefault();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  if (!open) return null

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
        <button type="submit" className="login-btn">Login</button>
        <Link to={"/signUp"}>Don’t have an account ?</Link>
      </form>
    </div>,
    document.getElementById('overlay')
  );
};

export default LoginForm;
