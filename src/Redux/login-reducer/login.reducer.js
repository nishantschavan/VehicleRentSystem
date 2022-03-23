import { LOGIN, LOGIN_FAILURE } from "../constants";
const InitialState = {
};

const LoginReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log("testing in reducer",action.payload);
      return {
        ...state,
        loginStatus: true,
        userData: action.payload,
      };
    case LOGIN_FAILURE:
      return{
        ...state,
  loginStatus: false,

        errMessage : action.payload,
      }
    default:
      return state;
  }
};
export default LoginReducer;