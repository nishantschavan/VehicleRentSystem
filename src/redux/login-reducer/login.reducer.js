import { LOGIN } from "../constants";
const InitialState = {
  loginState: false,
};

const LoginReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginState: true,
      };
    default:
      return state;
  }
};
export default LoginReducer;
