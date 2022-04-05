import { LOGIN, LOGIN_FAILURE,LOGOUT} from "../constants";
const InitialState = {
};

const LoginReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log("testing in reducer", action.payload);
      return {
        ...state,
        loginStatus: true,
        userData: action.payload,
        errMessage:null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginStatus: false,
        userData:null,
        errMessage: action.payload,
      }
    case LOGOUT:
      return{
        ...state,
        loginStatus:false,
        userData:null,
        errMessage:null
      }
    default:
      return state;
  }
};
export default LoginReducer;
