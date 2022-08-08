import { DEFAULT_PAGE_PARAMETERS } from '../../helpers/constants';
import {
  CLEAN_USER_DETAILS,
  REQUEST_USERS_SUCCESS,
  REQUEST_USER_DETAILS_SUCCESS
} from '../types/users-types';

const DEFAULT_STATE = {
  usersList: [],
  userDetails: null,
  pageParameters: DEFAULT_PAGE_PARAMETERS
};

const usersReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REQUEST_USERS_SUCCESS: {
      const { result, pageParameters } = action.payload;
      return {
        ...state,
        usersList: result,
        pageParameters
      };
    }
    case REQUEST_USER_DETAILS_SUCCESS: {
      return {
        ...state,
        userDetails: action.payload
      };
    }
    case CLEAN_USER_DETAILS: {
      return {
        ...state,
        userDetails: DEFAULT_STATE.userDetails
      };
    }
    default: return { ...state };
  }
}

export default usersReducer;
