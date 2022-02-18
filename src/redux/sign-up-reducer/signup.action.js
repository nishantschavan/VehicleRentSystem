import { SIGNUP } from "../constants";

export const signupAction = (payload) => {
  return {
    type: SIGNUP,
    payload,
  };
};
