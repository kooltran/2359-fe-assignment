export const initialState = {
  currentProgress: {}
};

export const updateProgressBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PROGRESS":
      const { selectedProgressValue, selectedProgress, progressVal } = action;
      const currentValue = state.currentProgress[selectedProgress];
      const updatedValue =
        currentValue !== undefined
          ? currentValue + progressVal
          : selectedProgressValue + progressVal;
      const finalProgressVal = updatedValue < 0 ? 0 : updatedValue;

      return {
        ...state,
        currentProgress: {
          ...state.currentProgress,
          [selectedProgress]: finalProgressVal
        }
      };
    default:
      return state;
  }
};
