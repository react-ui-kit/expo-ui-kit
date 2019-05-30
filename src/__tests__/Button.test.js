import React from "react";
import renderer from "react-test-renderer";
import { StyleSheet } from "react-native";
import { shallow } from "enzyme";

import Button from "../Button";
import { rgba } from "../utils";
import { COLORS, SIZES } from "../theme";

describe("<Button />", () => {
  it("render default", () => {
    const component = shallow(<Button />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.opacity).toEqual(0.8);
    expect(style).toEqual({
      height: SIZES.base * 5.5,
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.primary,
      justifyContent: "center"
    });
  });

  it("transparent", () => {
    const component = renderer.create(<Button transparent />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("transparent");
  });

  it("primary", () => {
    const component = renderer.create(<Button primary />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual(COLORS.primary);
  });

  it("secondary", () => {
    const component = renderer.create(<Button secondary />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual(COLORS.secondary);
  });

  it("tertiary", () => {
    const component = renderer.create(<Button tertiary />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual(COLORS.tertiary);
  });

  it("black", () => {
    const component = renderer.create(<Button black />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual(COLORS.black);
  });

  it("white", () => {
    const component = renderer.create(<Button white />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual(COLORS.white);
  });

  it("gray", () => {
    const component = renderer.create(<Button gray />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual(COLORS.gray);
  });

  it("alert", () => {
    const component = renderer.create(<Button alert />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual(COLORS.alert);
  });

  it("warning", () => {
    const component = renderer.create(<Button warning />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual(COLORS.warning);
  });

  it("success", () => {
    const component = renderer.create(<Button success />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual(COLORS.success);
  });

  it("info", () => {
    const component = renderer.create(<Button info />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual(COLORS.info);
  });

  it('color="#88B04B"', () => {
    const component = renderer.create(<Button color="#88B04B" />).toJSON();
    const instance = renderer.create(<Button color="#88B04B" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("#88B04B");
    expect(style.backgroundColor).toEqual("#88B04B");
  });

  it("outlined", () => {
    const component = renderer.create(<Button outlined />).toJSON();
    const instance = renderer.create(<Button outlined />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.outlined).toEqual(true);
    expect(style.borderWidth).toEqual(1);
    expect(style.color).toEqual(COLORS.primary);
    expect(style.borderColor).toEqual(COLORS.primary);
    expect(style.backgroundColor).toEqual("transparent");
  });

  it("disabled", () => {
    const component = renderer.create(<Button disabled />).toJSON();
    const instance = renderer.create(<Button disabled />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.disabled).toEqual(true);
    expect(style.backgroundColor).toEqual(rgba(COLORS.primary, 0.5));
  });

  it("opacity={0.5}", () => {
    const instance = renderer.create(<Button opacity={0.5} />).getInstance();
    expect(instance.props.opacity).toEqual(0.5);
  });
});
