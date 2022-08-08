import {
  INIT_APP_SUCCESS
} from '../types/app-types';

const DEFAULT_STATE = {
  noms: {}
};

const appReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case INIT_APP_SUCCESS: {
      return {
        ...state,
        noms: action.payload
      };
    }
    default: return { ...state };
  }
}

export default appReducer;
