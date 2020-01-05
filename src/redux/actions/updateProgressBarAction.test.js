import { updateProgressBarAction } from "./updateProgressBarAction";

describe("updateProgress action creator", () => {
  it("should handle update progress bar value", () => {
    const selectedProgress = "progressbar_1";
    const progressVal = 10;
    const selectedProgressValue = 35;
    const expectedAction = {
      type: "UPDATE_PROGRESS",
      selectedProgress: "progressbar_1",
      progressVal: 10,
      selectedProgressValue: 35
    };

    expect(
      updateProgressBarAction(
        progressVal,
        selectedProgress,
        selectedProgressValue
      )
    ).toEqual(expectedAction);
  });
});
