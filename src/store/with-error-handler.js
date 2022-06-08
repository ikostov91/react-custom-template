import { call } from 'redux-saga/effects';
import NotificationManager from 'react-notifications/lib/NotificationManager';

// higher order saga for error handling
const withErrorHandler = (saga, ...args) => function* (action) {
	try {
		yield call(saga, ...args, action)
	} catch (error) {
    NotificationManager.error(error.message, null, 3000);
	}	
}

export default withErrorHandler;
