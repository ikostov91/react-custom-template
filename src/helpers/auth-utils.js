import jwtDecode from 'jwt-decode';
import { Cookies } from 'react-cookie';
import {
  USER_COOKIE_NAME,
} from './constants';

let user = null;

export const isUserAuthenticated = () => {
  return !!user;

  // const user = getLoggedInUser();
  // if (!user) {
  //   return false;
  // }

  // const decoded = jwtDecode(user.token);
  // const currentTime = Date.now() / 1000;
  // if (decoded.exp < currentTime) {
  //   return false;
  // }
  // return true;
};

export const getLoggedInUser = () => {
  return user;

  // const cookies = new Cookies();
  // const user = cookies.get(USER_COOKIE_NAME);
  // return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
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

export const authenticateUser = (userDetails) => {
  user = userDetails;
};

export const logoutUser = () => {
  user = null;
};

export const getResetPasswordUrl = () => {
  const url = window.location.origin;
  return `${url}/reset-password`;
}

