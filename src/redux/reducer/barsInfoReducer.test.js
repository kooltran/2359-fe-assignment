import { initialState, barsInfoReducer } from "./barsInfoReducer";

describe("bars reducer", () => {
  it("should have a initial state", () => {
    expect(barsInfoReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_BARS_REQUEST action", () => {
    expect(
      barsInfoReducer(undefined, {
        type: "FETCH_BARS_REQUEST"
      })
    ).toEqual({
      ...initialState,
      fetchState: "loading"
    });
  });

  it("should handle FETCH_BARS_SUCCESS action", () => {
    expect(
      barsInfoReducer(undefined, {
        type: "FETCH_BARS_SUCCESS",
        res: "A"
      })
    ).toEqual({
      ...initialState,
      fetchState: "success",
      data: "A"
    });
  });

  it("should handle FETCH_BARS_FAIL action", () => {
    expect(
      barsInfoReducer(undefined, {
        type: "FETCH_BARS_FAIL",
        res: "B"
      })
    ).toEqual({
      ...initialState,
      fetchState: "fail",
      error: "B"
    });
  });
});
