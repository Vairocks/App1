import React from "react";
import { shallow } from "enzyme";
import Navigator from "../Screens/Navigator";
import Page1Screen from "../Screens/subScreens/Screen1";
import Page2Screen from "../Screens/subScreens/Screen2";
import Page3Screen from "../Screens/subScreens/Screen3";

describe("sub Screen 1 Tests", () => {
  it("should render screen 1", () => {
    const component = shallow(<Page1Screen />);
    console.log(component.debug());
    expect(component.length).toBe(1);
  });
});

describe("sub Screen 2 Tests", () => {
  it("should render screen 2", () => {
    const component = shallow(<Page2Screen />);
    console.log(component.debug());
    expect(component.length).toBe(1);
  });
});

describe("sub Screen 3 Tests", () => {
  it("should render screen 3", () => {
    const component = shallow(<Page3Screen />);
    console.log(component.debug());
    expect(component.length).toBe(1);
  });
});
