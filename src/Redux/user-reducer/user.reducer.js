import { USER } from "../constants";

const initialState = {
  UserStatus: false,
  userData: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        userData: [action.payload],
        UserStatus: true,
      };
    default:
      return state;
  }
};

export default UserReducer;