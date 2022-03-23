import { LOGIN, LOGIN_FAILURE } from "../constants";
import axios from "axios";

const loginEndPoint = "/login";
export const loginAction = (payload) => (dispatch) => {
  axios
    .post(loginEndPoint, payload)
    .then((res) => {
      res.data && res.data.Error ==="USER DOES NOT EXSIST PLEASE SIGN UP" ? dispatch({type:LOGIN_FAILURE,payload:res.data.Error}) :
      dispatch({ type: LOGIN, payload: res });

      console.log("login data success full", res);
      
    })
    .catch((err) => {
      console.log("err in login data api failed: ", err);
    });
};


