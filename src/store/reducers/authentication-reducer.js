import {
  CURRENT_USER_INFO_SUCCESS,
	LOGIN_USER_SUCCESS,
} from '../types/authentication-types';

const DEFAULT_STATE = {
  userDetails: {},
  currentUserInfo: {}
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
    case CURRENT_USER_INFO_SUCCESS:
      return {
        ...state,
        currentUserInfo: action.payload
      };
    default: return { ...state };
  }
}

export default authenticationReducer;
