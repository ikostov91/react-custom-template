import { call } from 'redux-saga/effects';
import NotificationManager from 'react-notifications/lib/NotificationManager';

export default function withErrorHandler(saga) {
  return function* callSaga(action) {
    try {
      yield call(saga, action);
    } catch (error) {
      NotificationManager.error(error.message, null, 3000);
    }
  };
};
