import React from "react";
import { shallow } from "enzyme";
import Navigator from "../Screens/Navigator";

describe("screen 1 test", () => {
  it("should render a view", () => {
    const component = shallow(<Navigator />);
    console.log(component.debug());
    expect(component.length).toBe(1);
  });
});
