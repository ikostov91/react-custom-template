import {
  DELETE_USER,
  REQUEST_USERS,
  REQUEST_USER_DETAILS,
  SAVE_USER_DETAILS
} from "../types/users-types";
import history from "../../history";
import { put, takeLatest, call } from 'redux-saga/effects';
import * as Actions from '../actions/users-actions';
import { translate } from "../../helpers/utils";
import NotificationManager from "react-notifications/lib/NotificationManager";
import withErrorHandler from '../with-error-handler';
import {
  requestUsers,
  deleteUser,
  requestUserDetails,
  saveUserDetails
} from "../../common/requests";
import { DEFAULT_PAGE_PARAMETERS, IS_NEW_ID } from "../../helpers/constants";

function* handleRequestUsers({ pageParameters = null }) {
  const paging = pageParameters || DEFAULT_PAGE_PARAMETERS;
  const result = yield call(requestUsers, paging);
  yield put(Actions.requestUsersSuccess(result));
};

function* handleDeleteUser({ id }) {
  yield call(deleteUser, id);
  NotificationManager.success(translate('notifications.user.deleted.successfully'), null, 3000);
  yield put(Actions.requestUsers());
};

function* handleRequestUserDetails({ id }) {
  if (id === IS_NEW_ID) {
    return;
  }

  const result = yield call(requestUserDetails, id);
  yield put(Actions.requestUserDetailsSuccess(result));
}

function* handleSaveUserDetails({ id, userDetails }) {
  yield call(saveUserDetails, id, userDetails);
  NotificationManager.success(translate('notifications.user.saved.successfully'), null, 3000);
  history.push('/users');
}

export default function* authenticationSaga() {
  yield takeLatest(REQUEST_USERS, withErrorHandler(handleRequestUsers));
  yield takeLatest(DELETE_USER, withErrorHandler(handleDeleteUser));
  yield takeLatest(REQUEST_USER_DETAILS, withErrorHandler(handleRequestUserDetails));
  yield takeLatest(SAVE_USER_DETAILS, withErrorHandler(handleSaveUserDetails));
};
