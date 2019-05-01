import React from "react";
import { mount } from "enzyme";
import DetailsForm from "../DetailsForm";

const props = {
  data: {},
  dirty: false,
  onDataChange: jest.fn()
};

let wrapper;

describe("test DetailsForm component", () => {
  beforeEach(() => {
    wrapper = mount(<DetailsForm {...props} />);
  });

  it("should render the component to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correct amount of inputs", () => {
    const inputList = wrapper.find("input");
    expect(inputList.length).toEqual(6);
  });

  it("should receive correct props", () => {
    expect(wrapper.props().dirty).toBe(false);
  });

  it("should trigger the correct function callback", () => {
    const firstInput = wrapper.find("input").first();
    firstInput.simulate("change");
    expect(props.onDataChange).toHaveBeenCalledWith("name", firstInput.props().value);
  });
});
