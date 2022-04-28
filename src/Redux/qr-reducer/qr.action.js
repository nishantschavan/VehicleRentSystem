import { QRCODE } from "../constants";

export const qrAction = (payload) =>{ 
    console.log("qr action : ", payload)
    return({
  type: QRCODE,
  payload,
})};