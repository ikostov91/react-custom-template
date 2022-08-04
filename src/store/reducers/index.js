import appReducer from './app-reducer';
import authenticationReducer from './authentication-reducer';
import usersReducer from './users-reducer';

const reducers = {
  app: appReducer,
  authentication: authenticationReducer,
  users: usersReducer
};

export default reducers;
