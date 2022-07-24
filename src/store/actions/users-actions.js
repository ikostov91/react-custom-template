import {
  REQUEST_USERS,
  REQUEST_USERS_SUCCESS,
  DELETE_USER
} from "../types/users-types";

export const requestUsers = () => ({
  type: REQUEST_USERS
});

export const requestUsersSuccess = (payload) => ({
  type: REQUEST_USERS_SUCCESS,
  payload
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  id
});