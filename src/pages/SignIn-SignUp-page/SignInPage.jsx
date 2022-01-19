import React from "react";
import "./SignInPage.scss";
import Scooty from "../../Images/scooty-gif.gif";
import LoginForm from "../../Components/Log-in/LoginForm";

const SignInPage = () => {
  return (
    <div className="Home_page">
      <img src={Scooty} alt="Text" className="animation" />
      <LoginForm />
    </div>
  );
};

export default SignInPage;
