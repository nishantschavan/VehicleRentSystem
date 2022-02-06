import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./LoginForm.scss";
import ReactDOM from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import Header from "../Header/header";

const LoginForm = ({open,onchange,getprofile}) => {
  const [userLogin, setUserLogin] = useState();
  const [isUserLogged,setisUserLogged] = useState(false);

  // const history = useHistory();
  const handleSubmit = (e) => {
    // history.push("/secondpage");
    console.log(userLogin);
    getprofile();
    onchange(userLogin);
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
            name="emailId"
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
