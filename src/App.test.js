import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("renders App component", () => {
  const baseProps = {
    fetchState: "loading",
    getBarAction: jest.fn()
  };

  it("should render properly with loading state", () => {
    expect(shallow(<App {...baseProps} />)).toMatchSnapshot();
  });

  it("should dispatch an action on componentDidMount", () => {
    expect(baseProps.getBarAction).toHaveBeenCalledTimes(1);
  });
});
