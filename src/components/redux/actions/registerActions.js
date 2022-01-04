import {
  REGISTER_ERROR,
  REGISTER_RESPONSE,
  REGISTER_REQUEST,
  REGISTER_ERROR_CLEAR,
  REG,
} from "./types";

export const registerUser = (userData, history) => (dispatch) => {};

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
    type: REGISTER_LOADING,
  };
};

// Action creator for Register Error Clear
export const registerErrorClear = () => {
  return {
    type: REGISTER_ERROR_CLEAR,
  };
};
