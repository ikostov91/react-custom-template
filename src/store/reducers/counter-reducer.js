export const defaultState = {
  counter: 0
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
}

export default reducer;
