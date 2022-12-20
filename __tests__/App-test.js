import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import {Home} from "../src/screens/Home/home";

describe("MyComponent", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
