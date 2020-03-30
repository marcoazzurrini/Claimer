import React from "react";
import App from "../Components/App";
import { shallow, mount } from "enzyme";
describe("testing app component", () => {
  it("should render without errors", () => {
    shallow(<App />);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render two divs", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("div")).toHaveLength(2);
  });

  it("should render one form", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("form")).toHaveLength(1);
  });
});
