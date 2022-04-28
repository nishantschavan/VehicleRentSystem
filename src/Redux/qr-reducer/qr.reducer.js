import { QRCODE } from "../constants";

const InitialState = {};

const QrReducer = (state = InitialState, action) => {
  switch (action.type) {
    case QRCODE:
      return {
        ...state,
        qrData: action.payload,
      };
    default:
      return state;
  }
};

export default QrReducer;