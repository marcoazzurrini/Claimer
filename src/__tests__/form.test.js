import React from "react";
import Form from "../Components/Form";
import { shallow, mount } from "enzyme";
import QuizQuestions from "../Api/questions";
const currentQuestion = QuizQuestions[0];

const MockElement = props => <input />;
describe("testing Form component", () => {
  it("should render without errors", () => {
    shallow(
      <Form
        question={currentQuestion}
        handleSubmit={() => null}
        render={stuff => <MockElement stuff={stuff} />}
      />
    );
  });

  it("should match snapshot", () => {
    const wrapper = shallow(
      <Form
        question={currentQuestion}
        handleSubmit={() => null}
        render={stuff => <MockElement stuff={stuff} />}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one form", () => {
    const wrapper = mount(
      <Form
        question={currentQuestion}
        handleSubmit={() => null}
        render={stuff => <MockElement stuff={stuff} />}
      />
    );
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("should render one button", () => {
    const wrapper = mount(
      <Form
        question={currentQuestion}
        handleSubmit={() => null}
        render={stuff => <MockElement stuff={stuff} />}
      />
    );
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("should render one input if passed throgh the render prop", () => {
    const wrapper = mount(
      <Form
        question={currentQuestion}
        handleSubmit={() => null}
        render={stuff => <MockElement stuff={stuff} />}
      />
    );
    expect(wrapper.find("input")).toHaveLength(1);
  });

  it("should call getPreviousQuestion when clicking chevron", () => {
    const mockSubmitFunc = jest.fn();
    const wrapper = mount(
      <Form
        question={currentQuestion}
        handleSubmit={mockSubmitFunc}
        getPreviousQuestion={mockSubmitFunc}
        render={stuff => <MockElement stuff={stuff} />}
      />
    );
    wrapper.find("img[alt='go back']").simulate("click");
    expect(mockSubmitFunc).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
});
