import React from "react";
import { shallow } from "enzyme";
import { ProgressButton } from "./progressButton";

describe("renders ProgressButton component", () => {
  const baseProps = {
    bars: [],
    selectedProgress: 1,
    buttons: [10, 20, 30],
    updateProgressBarAction: jest.fn()
  };

  it("should render properly with base props", () => {
    const wrapper = shallow(<ProgressButton {...baseProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("updateProgressBarAction should be call bar when click on the button", () => {
    const wrapper = shallow(<ProgressButton {...baseProps} />);
    wrapper
      .find(".progress-button")
      .at(0)
      .simulate("click");
    expect(baseProps.updateProgressBarAction).toHaveBeenCalled();
  });
});
