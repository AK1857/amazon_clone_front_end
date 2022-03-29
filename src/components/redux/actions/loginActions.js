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
  // Dispatch login redques
  dispatch({ type: LOGIN_REQUEST });
  // dispatch login error clear
  dispatch(loginErrorClear());

  // login reques

  axios
    .post(`${apiBaseurl}/api/users/login`, userData)
    .then((res) => {
      console.log(res.data);
      dispatch(setLoginUser(res.data.user));
      alert("login success");
      console.log("Login success");
    })
    .catch((err) => {
      // set login error
      dispatch(loginError(err.response.data));
      console.log(err.response.data);
    });

  // set isLoading to false
  dispatch(loginResponse());
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
