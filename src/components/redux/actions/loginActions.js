import {
  LOGIN_ERROR,
  LOGIN_RESPONSE,
  LOGIN_REQUEST,
  LOGIN_ERROR_CLEAR,
  SET_LOGIN_USER,
} from "./types";

import axios from "axios";
import { apiBaseurl } from "../../../utils/constant";
// Action creator for Register Request

export const loginRequest = (userData) => (dispatch) => {
  alert("clided");
};

// export const submitAction = (userData) => {
//   console.log("register action page");
//   alert(" call to register container page");
//   console.log(userData);
// };

// Action creator for Register Error
export const loginError = (payload) => {
  return {
    type: LOGIN_ERROR,
    payload: payload,
  };
};

// Action creator for Register processing Loading
export const loginResponse = () => {
  return {
    type: LOGIN_RESPONSE,
  };
};

// Action creator for LOGIN Error Clear
export const loginErrorClear = () => {
  return {
    type: LOGIN_ERROR_CLEAR,
  };
};

// Action creator for LOGIN Error Clear
export const setLoginUser = (payload) => {
  return {
    type: SET_LOGIN_USER,
    payload: payload,
  };
};
