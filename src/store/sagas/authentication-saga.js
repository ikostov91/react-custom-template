import { LOGIN_USER } from "../types/authentication-types";
import { put, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/authentication-actions';
import history from "../../history";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { getLoggedInUser, authenticateUser } from "../../helpers/auth-utils";

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
    NotificationManager.error('Wrong username and/or password!', null, 3000);
  }
};

export default function* authenticationSaga() {
  yield takeLatest(LOGIN_USER, handleLogin);
};
