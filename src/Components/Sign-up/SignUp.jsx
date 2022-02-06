import React from "react";
import { useState } from "react";
import Form from "../Form/Form";
import "./SignUp.scss";

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
  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
  };
  const handleChange = (target) => {
    const { name, value } = target;
    console.log(target);
    setData({ ...data, [name]: value });
  };

  return (
    <div className="signUp-container">
      <h1>Sign Up here 🚀</h1>
      <Form
        onSubmit={handleSubmit}
        checkNumber={checkNumber}
        error={error}
        formLabel={[
          {
            name: "fullname",
            label: "Name",
            type: "text",
            placeholder: "enter your name",
            handleChange: (target) => {
              handleChange(target);
            },
            required: true,
          },
          {
            name: "contact_info",
            label: "Contact",
            type: "number",
            placeholder: "contact number",
            handleChange: (target) => {
              // checkNumber(target.value);
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
            name: "re_password",
            label: "Re-enter password",
            type: "password",
            placeholder: "re-create password",
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
