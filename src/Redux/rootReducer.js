import { combineReducers } from "redux";
import LoginReducer from "./login-reducer/login.reducer";
import SignUpReducer from "./sign-up-reducer/signup.reducer";
import UserReducer from "./user-reducer/user.reducer";
import QrReducer from "./qr-reducer/qr.reducer";

const rootReducer = combineReducers({
  loginIn: LoginReducer,
  SignUp: SignUpReducer,
  User: UserReducer,
  Qr: QrReducer,
});

export default rootReducer;