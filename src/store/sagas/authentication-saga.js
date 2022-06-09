import { LOGIN_USER, REQUEST_PASSWORD_RESET_LINK, RESET_PASSWORD } from "../types/authentication-types";
import { put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/authentication-actions';
import history from "../../history";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { getLoggedInUser, authenticateUser, getResetPasswordUrl } from "../../helpers/auth-utils";
import withErrorHandler from '../with-error-handler';
import AppError from "../../common/error";

function* handleLogin({ email, password }) {
  if (email === 'test@abv.bg' && password === 'test') {
    const userDetails = {
      firstName: 'Ivaylo',
      lastName: 'Kostov',
      role: 'User',
      email
    };
    authenticateUser(userDetails);
    yield put(Actions.loginUserSuccess(getLoggedInUser()));
    history.push('/');
    NotificationManager.success('Successfully logged in!', null, 3000);
  } else {
    throw new AppError(400, 'Wrong username and/or password.');
  }
};

function* handleRequestPasswordResetLink({ email }) {
  const payload = {
    email
  };
  history.push('/login');
  NotificationManager.info('Password link will be sent to your email.', null, 6000);
};

function* handleResetPassword({ email, token, newPassword, confirmPassword }) {
  const payload = {
    email,
    token,
    newPassword,
    confirmPassword
  };
  console.log(payload);
  history.push('/login');
  NotificationManager.success('Password is reset successfully.', null, 3000);
};

export default function* authenticationSaga() {
  yield takeLatest(LOGIN_USER, withErrorHandler(handleLogin));
  yield takeLatest(REQUEST_PASSWORD_RESET_LINK, withErrorHandler(handleRequestPasswordResetLink));
  yield takeLatest(RESET_PASSWORD, withErrorHandler(handleResetPassword));
};
