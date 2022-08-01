import { getAuthorizationHeaders } from '../helpers/auth-utils';
import axiosInstance from './axios-instance';
import qs from 'qs';

export const apiUrl = 'http://test.com';

const resultLambda = (res) => res?.data ?? {};

export const login = (body) => (
  axiosInstance.post(`${apiUrl}/account/login`, body, {
    headers: {
      Accept: 'application/json',
    }
  }).then(resultLambda)
);

export const register = (body) => (
  axiosInstance.post(`${apiUrl}/account/register`, body, {
    headers: {
      Accept: 'application/json',
    }
  }).then(resultLambda)
);

export const forgotPassword = (body) => (
  axiosInstance.put(`${apiUrl}/account/forgot-password`, body, {
    headers: {
      Accept: 'application/json',
    }
  }).then(resultLambda)
);

export const resetPassword = (body) => (
  axiosInstance.put(`${apiUrl}/account/reset-password`, body, {
    headers: {
      Accept: 'application/json',
    }
  }).then(resultLambda)
);

export const currentUserInfo = () => (
  axiosInstance.get(`${apiUrl}/account/current-user-info`, {
    headers: {
      Accept: 'application/json',
    }
  }).then(resultLambda)
);

export const requestUsers = async (queryParams = {}) => {
  return axiosInstance.get(`${apiUrl}/users`, {
    headers: {
      Accept: 'application/json',
    },
    params: {
      ...queryParams
    }
  }).then(resultLambda)
};

export const deleteUser = (id) => (
  axiosInstance.delete(`${apiUrl}/users/${id}`, {
    headers: {
      Accept: 'application/json',
    }
  }).then(resultLambda)
);

export const requestUserDetails = (id) => (
  axiosInstance.get(`${apiUrl}/users/${id}`, {
    headers: {
      Accept: 'application/json',
    }
  }).then(resultLambda)
);

const constructGetQueryPath = (mainPath, paramsObject) => {
  const queryString = qs.stringify(paramsObject);
  const fullPath = `${mainPath}?${queryString}`;
  return fullPath;
};
