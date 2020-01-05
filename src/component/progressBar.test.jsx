import React from "react";
import { shallow } from "enzyme";
import { ProgressBarCmp } from "./progressBar";

describe("renders ProgressBar component", () => {
  const baseProps = {
    currentProgress: {},
    bars: [10, 20, 30],
    limit: 10
  };

  it("should render properly with base props", () => {
    expect(shallow(<ProgressBarCmp {...baseProps} />)).toMatchSnapshot();
  });
});
