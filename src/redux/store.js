import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/rootReducer";

export default function configureStorestore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
