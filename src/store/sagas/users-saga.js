import {
  DELETE_USER,
  REQUEST_USERS
} from "../types/users-types";
import { put, takeLatest, call } from 'redux-saga/effects';
import * as Actions from '../actions/users-actions';
import { translate } from "../../helpers/utils";
import NotificationManager from "react-notifications/lib/NotificationManager";
import withErrorHandler from '../with-error-handler';
import {
  requestUsers,
  deleteUser
} from "../../common/requests";

function* handleRequestUsers() {
  debugger;
  const result = yield call(requestUsers);
  debugger;
  yield put(Actions.requestUsersSuccess(result));
};

function* handleDeleteUser({ id }) {
  yield call(deleteUser, id);
  NotificationManager.success(translate('notifications.user.deleted.successfully'), null, 3000);
  yield put(Actions.requestUsers());
};

export default function* authenticationSaga() {
  yield takeLatest(REQUEST_USERS, withErrorHandler(handleRequestUsers));
  yield takeLatest(DELETE_USER, withErrorHandler(handleDeleteUser));
};
