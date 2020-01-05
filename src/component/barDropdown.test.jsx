import React from "react";
import { shallow } from "enzyme";
import { BarDropDown } from "./barDropdown";
import Select from "react-select";

describe("renders BarDropDown component", () => {
  const baseProps = {
    bars: [10, 20, 30],
    selectProgressAction: jest.fn()
  };

  it("should render properly with base props", () => {
    const wrapper = shallow(<BarDropDown {...baseProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("selectProgressAction should be call bar when change dropdown value", () => {
    const wrapper = shallow(<BarDropDown {...baseProps} />);
    wrapper.find(Select).simulate("change", { value: 10 });
    expect(baseProps.selectProgressAction).toHaveBeenCalledWith(10);
  });
});
