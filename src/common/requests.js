import axios from 'axios';
import { getAuthorizationHeaders } from '../helpers/auth-utils';
import axiosInstance from './axios-instance';

export const apiUrl = 'http://test.com';

export const login = (body) => (
  axiosInstance.post(`${apiUrl}/account/login`, body, {
    headers: {
      Accept: 'application/json',
    }
  })
);

export const register = (body) => (
  axiosInstance.post(`${apiUrl}/account/register`, body, {
    headers: {
      Accept: 'application/json',
    }
  })
);

export const forgotPassword = (body) => (
  axiosInstance.put(`${apiUrl}/account/forgot-password`, body, {
    headers: {
      Accept: 'application/json',
    }
  })
);

export const resetPassword = (body) => (
  axiosInstance.put(`${apiUrl}/account/reset-password`, body, {
    headers: {
      Accept: 'application/json',
    }
  })
);
