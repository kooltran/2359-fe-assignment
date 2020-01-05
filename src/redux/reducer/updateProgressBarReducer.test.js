import {
  initialState,
  updateProgressBarReducer
} from "./updateProgressBarReducer";

describe("update bar reducer", () => {
  it("should have a initial state", () => {
    expect(updateProgressBarReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle UPDATE_PROGRESS action", () => {
    const selectedProgress = "2";
    const progressVal = 10;
    const selectedProgressValue = 35;
    expect(
      updateProgressBarReducer(undefined, {
        type: "UPDATE_PROGRESS",
        selectedProgress,
        progressVal,
        selectedProgressValue
      })
    ).toEqual({
      ...initialState,
      currentProgress: {
        2: 45
      }
    });
  });
});
