import jwtDecode from 'jwt-decode';
import { Cookies } from 'react-cookie';
import {
  USER_COOKIE_NAME,
} from './constants';

export const testUserLogin = {
  email: 'test@abv.bg',
  password: 'test'
}

export const isUserAuthenticated = () => {
  const user = getLoggedInUser();
  if (!user) {
    return false;
  }

  const decoded = jwtDecode(user.token);
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    return false;
  }

  return true;
};

export const getLoggedInUser = () => {
  const cookies = new Cookies();
  const user = cookies.get(USER_COOKIE_NAME);
  return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
};

export const setLoggedInUser = (user) => {
  const cookies = new Cookies();
  cookies.set(USER_COOKIE_NAME, user);
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

export const logoutUser = () => {
  const cookies = new Cookies();
  cookies.remove(USER_COOKIE_NAME);
};

export const getResetPasswordUrl = () => {
  const url = window.location.origin;
  return `${url}/reset-password`;
};

export const getAuthorizationHeaders = () => ({
  "Authorization" : `Bearer ${getUserToken()}`
});

export const getContentTypeHeaders = (body) => (
  body instanceof FormData ? {} : { 'Content-Type': 'application/json' }
);

