import React from "react";
import { useState } from "react";
import Form from "../Form/Form";
import "./SignUp.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { signupAction } from "../../Redux/sign-up-reducer/signup.action";


const SignUp = () => {
  const signupstate = useSelector(state=>state);
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

  const history = useHistory();
  const navigateTo = () => history.push('/');

  const handleSubmit = (e) => {
    // console.log(data);

    // axios.post(endpoint,data).then(res=>{
    //   console.log(res);
    // })

    // e.preventDefault();

    e.preventDefault();
    console.log("sign up data", data);
    dispatch(signupAction(data));

    if(signupstate.signUpStatus){history.push('/');}
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
            className:"form-input",
            name: "username",
            label: "Name",
            type: "text",
            placeholder: "Enter your name",
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
            className:"form-input",
            name: "email",
            label: "Email Id",
            type: "email",
            placeholder: "Enter your email Id",
            handleChange: (target) => {
              handleChange(target);
            },
            required: true,
          },
          {
            className:"form-input",
            name: "password",
            label: "Create password",
            type: "password",
            placeholder: "Create password",
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
            id:"submit-btn",
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
