import React from "react";
import { useState } from "react";
import Form from "../Form/Form";
import "./SignUp.scss";
import axios from "axios";
import { useDispatch } from "react-redux";

import { signupAction } from "../../Redux/sign-up-reducer/signup.action";


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

  const endpoint = '/register';

  const handleSubmit = (e) => {
    // console.log(data);

    // axios.post(endpoint,data).then(res=>{
    //   console.log(res);
    // })

    // e.preventDefault();

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
      <h1>Sign Up here 🚀</h1>
      <Form
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
          // {
          //   name: "contact_info",
          //   label: "Contact",
          //   type: "number",
          //   placeholder: "contact number",
          //   handleChange: (target) => {
          //     // checkNumber(target.value);
          //     handleChange(target);
          //   },
          //   required: true,
          // },
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
