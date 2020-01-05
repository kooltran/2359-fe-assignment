import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { getBarAction } from "./getBarAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("bars actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("creates FETCH_BARS_SUCCESS after successfuly fetching bars", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { data: {} }
      });
    });

    const expectedActions = [
      { type: "FETCH_BARS_REQUEST" },
      { type: "FETCH_BARS_SUCCESS", res: { data: {} } }
    ];

    const store = mockStore();

    return store.dispatch(getBarAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates FETCH_BARS_FAIL after failure fetching bars", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 404,
        response: { message: "Fetch was fail" }
      });
    });

    const expectedActions = [
      { type: "FETCH_BARS_REQUEST" },
      { type: "FETCH_BARS_FAIL", res: { error: "Fetch was fail" } }
    ];

    const store = mockStore({ res: { error: "Fetch was fail" } });

    return store.dispatch(getBarAction()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
