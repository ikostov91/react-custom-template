import { LOGIN_USER, LOGIN_USER_SUCCESS } from "../types/authentication-types";

export const loginUser = (email, password) => ({
  type: LOGIN_USER,
  email,
  password
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload
});
