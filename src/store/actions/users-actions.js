import {
  REQUEST_USERS,
  REQUEST_USERS_SUCCESS,
  DELETE_USER,
  REQUEST_USER_DETAILS,
  REQUEST_USER_DETAILS_SUCCESS,
  SAVE_USER_DETAILS,
  CLEAN_USER_DETAILS
} from "../types/users-types";

export const requestUsers = (pageParameters) => ({
  type: REQUEST_USERS,
  pageParameters
});

export const requestUsersSuccess = (payload) => ({
  type: REQUEST_USERS_SUCCESS,
  payload
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  id
});

export const requestUserDetails = (id) => ({
  type: REQUEST_USER_DETAILS,
  id
});

export const requestUserDetailsSuccess = (payload) => ({
  type: REQUEST_USER_DETAILS_SUCCESS,
  payload
});

export const saveUserDetails = (id, userDetails) => ({
  type: SAVE_USER_DETAILS,
  id,
  userDetails
});

export const cleanUserDetails = () => ({
  type: CLEAN_USER_DETAILS
});
