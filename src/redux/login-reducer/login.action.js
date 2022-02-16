import { LOGIN } from "../constants";

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});
