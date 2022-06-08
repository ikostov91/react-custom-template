import { all } from 'redux-saga/effects';
import authenticationSaga from './authentication-saga';

export default function* rootSaga(getState) {
	yield all([
		authenticationSaga()
	]);
};
