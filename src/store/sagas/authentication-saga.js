import {
  LOGIN_USER, REQUEST_PASSWORD_RESET_LINK,
  RESET_PASSWORD, REGISTER_USER, CURRENT_USER_INFO
} from "../types/authentication-types";
import { put, takeLatest, call } from 'redux-saga/effects';
import * as Actions from '../actions/authentication-actions';
import history from "../../history";
import NotificationManager from "react-notifications/lib/NotificationManager";
import {
  setLoggedInUser
} from "../../helpers/auth-utils";
import withErrorHandler from '../with-error-handler';
import { translate } from "../../helpers/utils";
import {
  login, register,
  currentUserInfo,
  forgotPassword,
  resetPassword
} from "../../common/requests";

function* handleLogin({ email, password }) {
  const body = {
    email,
    password
  };
  const userAuthResult = yield call(login, body);
  setLoggedInUser(userAuthResult);
  yield put(Actions.loginUserSuccess(userAuthResult));
  history.push('/');
  NotificationManager.success(translate('notifications.successfully.logged.in'), null, 3000);
};

function* handleRegisterUser({ firstName, lastName, emailAddress, password }) {
  const body = {
    firstName,
    lastName,
    emailAddress,
    password
  };
  yield call(register, body);
  history.push('/');
  NotificationManager.success(translate('notifications.successfully.registered'), null, 3000);
};

function* handleRequestPasswordResetLink({ email }) {
  const payload = {
    email
  };
  yield call(forgotPassword, payload);
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
  yield call(resetPassword, payload);
  history.push('/login');
  NotificationManager.success(translate('notifications.password.reset.successfully'), null, 3000);
};

function* handleRequestCurrentUserInfo() {
  const result = yield call(currentUserInfo);
  yield put(Actions.requestCurrentUserInfoSuccess(result));
};

export default function* authenticationSaga() {
  yield takeLatest(LOGIN_USER, withErrorHandler(handleLogin));
  yield takeLatest(REGISTER_USER, withErrorHandler(handleRegisterUser));
  yield takeLatest(REQUEST_PASSWORD_RESET_LINK, withErrorHandler(handleRequestPasswordResetLink));
  yield takeLatest(RESET_PASSWORD, withErrorHandler(handleResetPassword));
  yield takeLatest(CURRENT_USER_INFO, withErrorHandler(handleRequestCurrentUserInfo));
};
