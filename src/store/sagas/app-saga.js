import { takeLatest, put } from 'redux-saga/effects';
import withErrorHandler from '../with-error-handler';
import { INIT_APP } from "../types/app-types";
import * as Actions from '../actions/app-actions';

function* handleInitApp() {
  const userRoles = [{
    id: 1, name: 'Admin'
  }, {
    id: 2, name: 'User'
  }];

  const noms = {
    roles: userRoles
  };

  yield put(Actions.initAppSuccess(noms));
}

export default function* appSaga() {
  yield takeLatest(INIT_APP, withErrorHandler(handleInitApp));
};
