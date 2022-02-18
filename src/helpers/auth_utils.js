import jwtDecode from 'jwt-decode';
import { Cookies } from 'react-cookie';
import {
  USER_COOKIE_NAME,
} from '../constants/cookie-names';
import { ACTIVATE_ACCOUNT_ROUTE, RESET_PASS_ROUTE } from './url_helper';

export const isUserAuthenticated = () => {
  const user = getLoggedInUser();
  if (!user) {
    return false;
  }

  const decoded = jwtDecode(user.token);
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    return true;
  }
  return true;
};

export const getLoggedInUser = () => {
  const cookies = new Cookies();
  const user = cookies.get(USER_COOKIE_NAME);
  return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
};

export const getUserRole = () => {
  const cookies = new Cookies();
  const user = cookies.get(USER_COOKIE_NAME);
  return user ? user.role : null;
};

export const getUserToken = () => {
  const cookies = new Cookies();
  const user = cookies.get(USER_COOKIE_NAME);
  return user ? user.token : null;
};

export const removeUserToken = () => {
  const cookies = new Cookies();
  cookies.remove(USER_COOKIE_NAME);
};

export const getActivateAccountUrl = () => {
  const url = window.location.origin;
  return `${url}${ACTIVATE_ACCOUNT_ROUTE}`;
}

export const getChangePasswordUrl = () => {
  const url = window.location.origin;
  return `${url}${RESET_PASS_ROUTE}`;
}
