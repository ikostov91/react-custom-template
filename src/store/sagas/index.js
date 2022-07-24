import { all } from 'redux-saga/effects';
import authenticationSaga from './authentication-saga';
import usersSaga from './users-saga';

export default function* rootSaga(getState) {
	yield all([
		authenticationSaga(),
		usersSaga()
	]);
};
