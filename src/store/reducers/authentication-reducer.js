import {
	LOGIN_USER_SUCCESS,
} from '../types/authentication-types';

const DEFAULT_STATE = {
  userDetails: {},
};

const authenticationReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: 
      return {
        ...state,
        userDetails: {
          ...action.payload
        }
      };
    default: return { ...state };
  }
}

export default authenticationReducer;
