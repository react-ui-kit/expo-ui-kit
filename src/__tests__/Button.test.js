import React from "react";
import renderer from "react-test-renderer";
import { StyleSheet } from "react-native";
import { shallow } from "enzyme";

import Button from "../Button";
import { rgba } from "../utils";
import { SIZES } from "../theme";

describe("<Button />", () => {
  it("render default", () => {
    const component = shallow(<Button />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.opacity).toEqual(0.8);
    expect(style).toEqual({
      height: SIZES.base * 5.5,
      borderRadius: SIZES.radius,
      backgroundColor: "#4630EB",
      justifyContent: "center",
      alignItems: "center"
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
    expect(style.backgroundColor).toEqual("#4630EB");
  });

  it("secondary", () => {
    const component = renderer.create(<Button secondary />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#A3A1F7");
  });

  it("tertiary", () => {
    const component = renderer.create(<Button tertiary />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#FFE358");
  });

  it("black", () => {
    const component = renderer.create(<Button black />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#000020");
  });

  it("white", () => {
    const component = renderer.create(<Button white />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#FFFFFF");
  });

  it("gray", () => {
    const component = renderer.create(<Button gray />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#535453");
  });

  it("error", () => {
    const component = renderer.create(<Button error />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#DC3545");
  });

  it("warning", () => {
    const component = renderer.create(<Button warning />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#FFE358");
  });

  it("success", () => {
    const component = renderer.create(<Button success />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#4CD964");
  });

  it("info", () => {
    const component = renderer.create(<Button info />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#4DA1FF");
  });

  it('color="#88B04B"', () => {
    const component = renderer.create(<Button color="#88B04B" />).toJSON();
    const instance = renderer.create(<Button color="#88B04B" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("#88B04B");
    expect(style.backgroundColor).toEqual("#88B04B");
  });

  it("outlined", () => {
    const component = renderer.create(<Button primary outlined />).toJSON();
    const instance = renderer.create(<Button primary outlined />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.outlined).toEqual(true);
    expect(style.borderWidth).toEqual(1);
    expect(style.borderColor).toEqual("#4630EB");
    expect(style.backgroundColor).toEqual("transparent");
  });

  it("flex", () => {
    const component = renderer.create(<Button />).toJSON();
    const instance = renderer.create(<Button />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.flex).toEqual(0);
    expect(style.flex).toEqual(undefined);
  });

  it("flex=0.5", () => {
    const component = renderer.create(<Button flex={0.5} />).toJSON();
    const instance = renderer.create(<Button flex={0.5} />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.flex).toEqual(0.5);
    expect(style.flex).toEqual(0.5);
  });

  it("height=56", () => {
    const component = renderer.create(<Button height={56} />).toJSON();
    const instance = renderer.create(<Button height={56} />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.height).toEqual(56);
    expect(style.height).toEqual(56);
  });

  it("margin={12}", () => {
    const component = renderer.create(<Button margin={12} />).toJSON();
    const instance = renderer.create(<Button margin={12} />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.margin).toEqual(12);
    expect(style.marginBottom).toEqual(12);
    expect(style.marginLeft).toEqual(12);
    expect(style.marginRight).toEqual(12);
    expect(style.marginTop).toEqual(12);
  });

  it("marginHorizontal={6} marginVertical={8}", () => {
    const component = renderer
      .create(<Button marginHorizontal={6} marginVertical={8} />)
      .toJSON();
    const instance = renderer
      .create(<Button marginHorizontal={6} marginVertical={8} />)
      .getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.marginHorizontal).toEqual(6);
    expect(instance.props.marginVertical).toEqual(8);
    expect(style.marginHorizontal).toEqual(6);
    expect(style.marginVertical).toEqual(8);
  });

  it("padding={12}", () => {
    const component = renderer.create(<Button padding={12} />).toJSON();
    const instance = renderer.create(<Button padding={12} />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.padding).toEqual(12);
    expect(style.paddingBottom).toEqual(12);
    expect(style.paddingLeft).toEqual(12);
    expect(style.paddingRight).toEqual(12);
    expect(style.paddingTop).toEqual(12);
  });

  it("paddingHorizontal={6} paddingVertical={8}", () => {
    const component = renderer
      .create(<Button paddingHorizontal={6} paddingVertical={8} />)
      .toJSON();
    const instance = renderer
      .create(<Button paddingHorizontal={6} paddingVertical={8} />)
      .getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.paddingHorizontal).toEqual(6);
    expect(instance.props.paddingVertical).toEqual(8);
    expect(style.paddingHorizontal).toEqual(6);
    expect(style.paddingVertical).toEqual(8);
  });

  it("disabled", () => {
    const component = renderer.create(<Button disabled />).toJSON();
    const instance = renderer.create(<Button disabled />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.disabled).toEqual(true);
    expect(style.backgroundColor).toEqual(rgba("#4630EB", 0.5));
  });

  it("opacity={0.5}", () => {
    const instance = renderer.create(<Button opacity={0.5} />).getInstance();
    expect(instance.props.opacity).toEqual(0.5);
  });
});
