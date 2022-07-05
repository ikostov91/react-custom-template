import {
  CURRENT_USER_INFO,
  CURRENT_USER_INFO_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REQUEST_PASSWORD_RESET_LINK,
  RESET_PASSWORD
} from "../types/authentication-types";

export const loginUser = (email, password) => ({
  type: LOGIN_USER,
  email,
  password
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const registerUser = (firstName, lastName, emailAddress, password) => ({
  type: REGISTER_USER,
  firstName,
  lastName,
  emailAddress,
  password
});

export const requestPasswordResetLink = (email) => ({
  type: REQUEST_PASSWORD_RESET_LINK,
  email
});

export const resetPassword = (email, token, newPassword, confirmPassword) => ({
  type: RESET_PASSWORD,
  email,
  token,
  newPassword,
  confirmPassword
});

export const registerPassword = (firstName, lastName, emailAddress, password) => ({
  type: RESET_PASSWORD,
  firstName,
  lastName,
  emailAddress,
  password
});

export const requestCurrentUserInfo = () => ({
  type: CURRENT_USER_INFO
});

export const requestCurrentUserInfoSuccess = (payload) => ({
  type: CURRENT_USER_INFO_SUCCESS,
  payload
});