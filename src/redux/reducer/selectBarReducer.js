export const initialState = {
  selectedProgress: 1
};

export const selectBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PROGRESS":
      return {
        ...state,
        selectedProgress: action.selectedProgress
      };
    default:
      return state;
  }
};
