import {
  REQUEST_USERS
} from "../types/users-types";
import { put, takeLatest, call } from 'redux-saga/effects';
import * as Actions from '../actions/users-actions';
import history from "../../history";
import NotificationManager from "react-notifications/lib/NotificationManager";
import withErrorHandler from '../with-error-handler';
import {
  requestUsers
} from "../../common/requests";

function* handleRequestUsers() {
  debugger;
  const result = yield call(requestUsers);
  yield put(Actions.requestUsersSuccess(result));
};

export default function* authenticationSaga() {
  yield takeLatest(REQUEST_USERS, withErrorHandler(handleRequestUsers));
};
