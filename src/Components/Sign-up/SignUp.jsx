import React from "react";
import { useState } from "react";
import Form from "../Form/Form";
import "./SignUp.scss";

import { useDispatch } from "react-redux";
import { signupAction } from "../../redux/sign-up-reducer/signup.action";

const SignUp = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const checkNumber = (value) => {
    if (value.length > 10 && value.length < 10) {
      setError(true);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sign up data", data);
    dispatch(signupAction(data));
  };

  const handleChange = (target) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="signUp-container">
      <h1 className="sign-up-header">Sign Up here 🚀</h1>
      <Form
        className="form-wrapper"
        onSubmit={(e) => handleSubmit(e)}
        checkNumber={checkNumber}
        error={error}
        formLabel={[
          {
            name: "username",
            label: "Name",
            type: "text",
            placeholder: "enter your name",
            handleChange: (target) => {
              handleChange(target);
            },
            required: true,
          },

          {
            name: "email",
            label: "Email Id",
            type: "email",
            placeholder: "enter your email Id",
            handleChange: (target) => {
              handleChange(target);
            },
            required: true,
          },
          {
            name: "password",
            label: "Create password",
            type: "password",
            placeholder: "create password",
            handleChange: (target) => {
              handleChange(target);
            },
            required: true,
          },

          {
            name: "confirm btn",
            label: "",
            type: "submit",
            placeholder: "",
            value: "Confirm",
            required: "false",
          },
        ]}
      />
    </div>
  );
};

export default SignUp;
