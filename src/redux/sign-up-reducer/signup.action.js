import { SIGNUP } from "../constants";
import axios from "axios";

const signUpEndPOint = "/register";
export const signupAction = (payload) => (dispatch) => {
  axios
    .post(signUpEndPOint, payload)
    .then((res) => {
      dispatch({ type: SIGNUP, payload: res });
      console.log("sign up success full", res);
    })
    .catch((err) => {
      console.log("err in sign up api: ", err);
    });
};
