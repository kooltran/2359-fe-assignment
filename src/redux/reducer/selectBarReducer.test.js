import { initialState, selectBarReducer } from "./selectBarReducer";

describe("select bar reducer", () => {
  it("should have a initial state", () => {
    expect(selectBarReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SELECT_PROGRESS action", () => {
    expect(
      selectBarReducer(undefined, {
        type: "SELECT_PROGRESS",
        selectedProgress: 2
      })
    ).toEqual({
      ...initialState,
      selectedProgress: 2
    });
  });
});
