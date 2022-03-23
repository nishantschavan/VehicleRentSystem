import { USER } from "../constants.js";
import axios from "axios";
const userEndPoint = "";
const userAction = (payload) => (dispatch) => {
  axios
    .post(userEndPoint, payload)
    .then((res) => {
      dispatch({ type: USER, payload: res });
      console.log("user data success full", res);
    })
    .catch((err) => {
      console.log("err in user data api: ", err);
    });
};

export default userAction;