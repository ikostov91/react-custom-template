import { getUserToken } from '../helpers/authUtils';
import ApiError from './api-error';
import QS from 'qs';
import { getLangCode } from '../helpers/langUtils';

const fileTypes = [
  'application/octet-stream',
  'application/zip',
  'application/pdf',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
  'application/vnd.oasis.opendocument.text',
  'image/png',
  'image/jpeg',
];

export const apiUrl = process.env.REACT_APP_API_URL;

export const request = async (
  endpoint, method, body = undefined, authorisation = true, additionalHeaders = {}, isSelfCall = false
) => {
  let headers = {
    Accept: 'application/json',
    ...(body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(authorisation ? {
      Authorization: `Bearer ${getUserToken()}`,
    } : {}),
    ...additionalHeaders
  };

  const response = await fetch(isSelfCall ? endpoint : apiUrl + endpoint, {
    headers,
    method,
    body: body instanceof FormData ? body : JSON.stringify(body)
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new ApiError(response.status, 'Unauthorized');
    }
    if (response.status === 403) {
      throw new ApiError(response.status, 'Forbidden');
    }
    if (response.status === 419) {
      throw new ApiError(response.status, 'Password expired');
    }
    return response.json().then((res) => {
      let { errors, message, status } = res;

      if (Array.isArray(res)) {
        errors = res.join('; ');
      } else if (errors) {
        const errorMessages = Object.values(errors);
        errors = errorMessages.join('; ');
      } else {
        // handle case with Internal Server Error 500
        errors = 'Oops, something went wrong. Please try again later';
      }

      throw new ApiError(res.status, errors, res.validation);
    });
  }

  if (fileTypes.includes(response.headers.get('Content-Type'))) {
    return {
      blob: await response.blob()
    }
  }

  if (response.status === 204) {
    return {};
  }

  if (!response.headers.get('Content-Type')) {
    return response
      .json()
      .catch((err) => {
        // Fix for empty response body
        console.error(`'${err}' happened, but no big deal!`);
        return {};
      });
  }

  if (response.headers.get('x-pagination')) {
    const pagedResponse = {
      result: await response.json(),
      pageParameters: JSON.parse(response.headers.get('x-pagination'))
    };

    return pagedResponse;
  }

  return response.json();
};

// App
export const requestNomenclatures = async () => request('system/nomenclatures', 'GET');
export const requestCurrentUserInfo = async () => request('identity/currentuserinfo', 'GET');
export const requestLanguages = async () => request('/get-languages');

// Authentication
export const requestLogin = async (body) => request('identity/login', 'POST', body, false);
export const requestRefreshToken = async (body) => request('api/accounts/refresh-token', 'POST', body, false); // TODO
export const requestUserAccount = async (id) => request(`api/accounts/get-user-account/${id}`, 'GET'); // TODO
export const activateUserAccount = async (body) => request('identity/createuserpassword', 'PUT', body);
export const requestPasswordReset = async (body) => request('identity/forgotpassword', 'PUT', body);
export const resetPassword = async (body) => request('identity/resetpassword', 'PUT', body);
export const validateEmailToken = async (body) => request('identity/validateemailconfirmationtoken', 'POST', body);
export const changeUserPassword = async (body) => request(`identity/changepassword`, 'PUT', body);
