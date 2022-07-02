import {
  LOGIN_USER, REQUEST_PASSWORD_RESET_LINK,
  RESET_PASSWORD, REGISTER_USER
} from "../types/authentication-types";
import { put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/authentication-actions';
import history from "../../history";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { getLoggedInUser, authenticateUser, getResetPasswordUrl } from "../../helpers/auth-utils";
import withErrorHandler from '../with-error-handler';
import AppError from "../../common/error";
import { translate } from "../../helpers/utils";
import { login } from "../../common/requests";

function* handleLogin({ email, password }) {
  debugger;
  const body = {
    email,
    password
  };
  const userDetails = yield login(body);
  debugger;
  console.log(userDetails);
  yield put(Actions.loginUserSuccess(getLoggedInUser()));
  history.push('/');
  // if (email === 'test@abv.bg' && password === 'test') {
  //   const userDetails = {
  //     firstName: 'Ivaylo',
  //     lastName: 'Kostov',
  //     role: 'User',
  //     email
  //   };
  //   authenticateUser(userDetails);
  //   yield put(Actions.loginUserSuccess(getLoggedInUser()));
  //   history.push('/');
  //   NotificationManager.success(translate('notifications.successfully.logged.in'), null, 3000);
  // } else {
  //   throw new AppError(400, 'Wrong username and/or password.');
  // }
};

function* handleRegisterUser({ firstName, lastName, emailAddress, password }) {
  alert('REGISTER');
  console.log({ firstName, lastName, emailAddress, password });
};

function* handleRequestPasswordResetLink({ email }) {
  const payload = {
    email
  };
  history.push('/login');
  NotificationManager.info(translate('notifications.password.link.sent.to.mail'), null, 6000);
};

function* handleResetPassword({ email, token, newPassword, confirmPassword }) {
  const payload = {
    email,
    token,
    newPassword,
    confirmPassword
  };
  history.push('/login');
  NotificationManager.success(translate('notifications.password.reset.successfully'), null, 3000);
};

export default function* authenticationSaga() {
  yield takeLatest(LOGIN_USER, withErrorHandler(handleLogin));
  yield takeLatest(REGISTER_USER, withErrorHandler(handleRegisterUser));
  yield takeLatest(REQUEST_PASSWORD_RESET_LINK, withErrorHandler(handleRequestPasswordResetLink));
  yield takeLatest(RESET_PASSWORD, withErrorHandler(handleResetPassword));
};
