import React from "react";
import { StyleSheet } from "react-native";
import renderer from "react-test-renderer";
import Card from "../Card";
import { rgba } from "../utils";

describe("<Card />", () => {
  it("render default", () => {
    const component = renderer.create(<Card />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.flex).toEqual(1);
  });

  it("shadow", () => {
    const card = renderer.create(<Card shadow />);

    const component = card.toJSON();
    const instance = renderer.create(<Card shadow />).root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.shadow).toEqual(true);
    expect(style.shadowColor).toEqual("#000020");
  });

  it("outlined", () => {
    const card = renderer.create(<Card outlined />);

    const component = card.toJSON();
    const instance = card.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.outlined).toEqual(true);
    expect(style.borderColor).toEqual(rgba("#000020", 0.16));
  });
});
