import { LOGIN } from "../constants";
import axios from "axios";

const loginEndPoint = "/login";
export const loginAction = (payload) => (dispatch) => {
  axios
    .post(loginEndPoint, payload)
    .then((res) => {
      dispatch({ type: LOGIN, payload: res });
      console.log("login data success full", res);
    })
    .catch((err) => {
      console.log("err in login data api failed: ", err);
    });
};
