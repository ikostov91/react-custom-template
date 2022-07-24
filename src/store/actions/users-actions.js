import {
  REQUEST_USERS,
  REQUEST_USERS_SUCCESS
} from "../types/users-types";

export const requestUsers = () => ({
  type: REQUEST_USERS
});

export const requestUsersSuccess = (payload) => ({
  type: REQUEST_USERS_SUCCESS,
  payload
});