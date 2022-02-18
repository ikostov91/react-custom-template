import { call, put } from 'redux-saga/effects';

import { logoutUser } from '../actions/AuthenticationActions';
import { addErrorNotification } from '../notifications/notifications-methods';
// import { refreshToken } from '../pages/authentication/saga';

function handleSagaError(saga) {
  return function* callSaga(action) {
    try {
      yield call(saga, action);
    } catch (error) {
      if (error.status === 401) {
        // const isRefreshed = true; // yield call(refreshToken); TODO
        // if (isRefreshed) {
        //   yield call(saga, action);
        //   return;
        // }
        yield put(logoutUser());
      }
      addErrorNotification(error.message);
    }
  };
}

export default handleSagaError;
