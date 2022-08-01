import { DEFAULT_PAGE_PARAMETERS } from '../../helpers/constants';
import {
  REQUEST_USERS_SUCCESS
} from '../types/users-types';

const DEFAULT_STATE = {
  usersList: [],
  userDetails: {},
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
    default: return { ...state };
  }
}

export default usersReducer;
