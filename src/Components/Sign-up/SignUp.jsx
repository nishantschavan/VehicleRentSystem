import React from "react";
import { useState } from "react";
import Form from "../Form/Form";
import "./SignUp.scss";
import axios from "axios";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const checkNumber = (value) => {
    if (value.length > 10 && value.length < 10) {
      setError(true);
      return false;
    }
    return true;
  };

  const endpoint = "/register";

  const handleSubmit = (e) => {
    console.log(data);

    axios.post(endpoint, data).then((res) => {
      console.log(res);
    });

    e.preventDefault();
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
        onSubmit={handleSubmit}
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
          // {
          //   name: "re_password",
          //   label: "Re-enter password",
          //   type: "password",
          //   placeholder: "re-create password",
          //   handleChange: (target) => {
          //     handleChange(target);
          //   },
          //   required: true,
          // },
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
