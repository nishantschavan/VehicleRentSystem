import { USER } from "../constants";
import axios from "axios";

const userEndPoint = "/transaction/request";

export const userAction = (payload) => (dispatch) => {
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
