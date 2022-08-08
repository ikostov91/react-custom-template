import { all } from 'redux-saga/effects';
import appSaga from './app-saga';
import authenticationSaga from './authentication-saga';
import usersSaga from './users-saga';

export default function* rootSaga(getState) {
	yield all([
		appSaga(),
		authenticationSaga(),
		usersSaga()
	]);
};
