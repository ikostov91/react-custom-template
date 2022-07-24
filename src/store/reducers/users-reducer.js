import {
  REQUEST_USERS_SUCCESS
} from '../types/users-types';

const DEFAULT_STATE = {
  usersList: [],
  userDetails: {}
};

const usersReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REQUEST_USERS_SUCCESS: 
      return {
        ...state,
        usersList: action.payload
      };
    default: return { ...state };
  }
}

export default usersReducer;
