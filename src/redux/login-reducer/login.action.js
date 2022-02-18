import { LOGIN } from "../constants";

export const loginAction = (payload) => {
  console.log("this is from action", payload);
  return {
    type: LOGIN,
    payload,
  };
};
