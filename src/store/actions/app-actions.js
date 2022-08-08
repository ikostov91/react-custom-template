import {
  INIT_APP,
  INIT_APP_SUCCESS
} from "../types/app-types";

export const initApp = () => ({
  type: INIT_APP
});

export const initAppSuccess = (payload) => ({
  type: INIT_APP_SUCCESS,
  payload
});
