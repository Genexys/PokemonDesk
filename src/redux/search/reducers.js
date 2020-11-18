const initialState = {
  search: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
