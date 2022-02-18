import { LOGIN } from "../constants";
const InitialState = {
  loginStatus: false,
};

const LoginReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginStatus: true,
        userData: action.payload,
      };
    default:
      return state;
  }
};
export default LoginReducer;
