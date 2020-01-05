import { barsApi } from "../../api/barsApi";

export const getBarAction = () => {
  return dispatch => {
    dispatch({ type: "FETCH_BARS_REQUEST" });
    return barsApi()
      .then(res => {
        dispatch({ type: "FETCH_BARS_SUCCESS", res });
      })
      .catch(error => dispatch({ type: "FETCH_BARS_FAIL", error }));
  };
};
