import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = () => {
  const [userLogin, setUserLogin] = useState();

  // const history = useHistory();
  const handleSubmit = (e) => {
    // history.push("/secondpage");
    console.log(userLogin);
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="form-container">
        <b
          style={{
            marginBottom: "75px",
            fontSize: "30px",
            width: "80%",
            textAlign: "center",
          }}
        >
          Login
        </b>

        <div className="form-control">
          <label className="login-labels">Email Id</label>
          <input
            className="form-input"
            name="emailId"
            type="email"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Email Id"
          />
        </div>
        <div className="form-control">
          <label className="login-labels">Password</label>
          <input
            className="form-input"
            name="password"
            type="password"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="password"
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <Link to={"/signUp"} style={{ marginTop: "30px" }}>
          New User? Create account
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
