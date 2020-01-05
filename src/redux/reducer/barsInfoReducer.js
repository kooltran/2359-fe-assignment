export const initialState = {
  fetchState: "idle",
  data: {},
  error: null
};

export function barsInfoReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_BARS_REQUEST":
      return {
        ...state,
        fetchState: "loading"
      };
    case "FETCH_BARS_SUCCESS":
      return {
        ...state,
        fetchState: "success",
        data: action.res
      };
    case "FETCH_BARS_FAIL":
      return {
        ...state,
        fetchState: "fail",
        error: action.res
      };
    default:
      return state;
  }
}
