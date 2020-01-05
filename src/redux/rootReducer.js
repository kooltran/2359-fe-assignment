import { combineReducers } from "redux";
import { barsInfoReducer } from "./reducer/barsInfoReducer";
import { selectBarReducer } from "./reducer/selectBarReducer";
import { updateProgressBarReducer } from "./reducer/updateProgressBarReducer";

export default combineReducers({
  barsInfoReducer,
  selectBarReducer,
  updateProgressBarReducer
});
