import React from "react";
import renderer from "react-test-renderer";
import { StyleSheet } from "react-native";

import Card from "../Card";
import { rgba } from "../utils";
import { COLORS } from "../theme";

describe("<Card />", () => {
  it("render default", () => {
    const component = renderer.create(<Card />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.flex).toEqual(1);
  });

  it("shadow", () => {
    const component = renderer.create(<Card shadow />).toJSON();
    const instance = renderer.create(<Card shadow />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.shadow).toEqual(true);
    expect(style.shadowColor).toEqual(COLORS.black);
  });

  it("outlined", () => {
    const component = renderer.create(<Card outlined />).toJSON();
    const instance = renderer.create(<Card outlined />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.outlined).toEqual(true);
    expect(style.borderColor).toEqual(rgba(COLORS.black, 0.16));
  });
});
