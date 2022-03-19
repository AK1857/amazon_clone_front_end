import {
  REGISTER_ERROR,
  REGISTER_RESPONSE,
  REGISTER_REQUEST,
  REGISTER_ERROR_CLEAR,
  REG,
} from "./types";

import axios from "axios";
import { apiBaseurl } from "./../../../utils/constant";
// Action creator for Register Request

export const registerRequest = (userData) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  alert(apiBaseurl);

  dispatch(registerErrorClear());

  axios
    .post(`${apiBaseurl}/api/users/register`, userData)
    .then((res) => {
      dispatch(registerResponse());
      console.log(res);
    })
    .catch((err) => {
      dispatch(registerResponse());
      dispatch(registerError(err.response.data.errors));
      console.log(err.response.data);
    });
};

// export const submitAction = (userData) => {
//   console.log("register action page");
//   alert(" call to register container page");
//   console.log(userData);
// };

// Action creator for Register Error
export const registerError = (payload) => {
  return {
    type: REGISTER_ERROR,
    payload: payload,
  };
};

// Action creator for Register processing Loading
export const registerResponse = () => {
  return {
    type: REGISTER_RESPONSE,
  };
};

// Action creator for Register Error Clear
export const registerErrorClear = () => {
  return {
    type: REGISTER_ERROR_CLEAR,
  };
};
