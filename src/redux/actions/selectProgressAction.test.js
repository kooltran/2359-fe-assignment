import { selectProgressAction } from "./selectProgressAction";

describe("selectProgress action creator", () => {
  it("should handle select progress bar", () => {
    const selectedProgress = "progressbar_1";
    const expectedAction = {
      type: "SELECT_PROGRESS",
      selectedProgress: "progressbar_1"
    };

    expect(selectProgressAction(selectedProgress)).toEqual(expectedAction);
  });
});
