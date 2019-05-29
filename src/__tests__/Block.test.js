import React from "react";
import renderer from "react-test-renderer";
import { StyleSheet } from "react-native";

import Block from "../Block";
import { COLORS, SIZES } from "../theme";

describe("<Block />", () => {
  it("render default", () => {
    const component = renderer.create(<Block />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    // console.log("style", style);
    expect(style.flex).toEqual(1);
  });

  it("flex", () => {
    const component = renderer.create(<Block flex />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.flex).toEqual(1);
  });

  it("flex={0.5}", () => {
    const component = renderer.create(<Block flex={0.5} />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.flex).toEqual(0.5);
  });

  it("flex={false}", () => {
    const component = renderer.create(<Block flex={false} />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.flex).toEqual(0);
  });

  it("row", () => {
    const component = renderer.create(<Block row />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.flexDirection).toEqual("row");
  });

  it("column", () => {
    const component = renderer.create(<Block column />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.flexDirection).toEqual("column");
  });

  it("center", () => {
    const component = renderer.create(<Block center />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.alignItems).toEqual("center");
  });

  it("middle", () => {
    const component = renderer.create(<Block middle />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.justifyContent).toEqual("center");
  });

  it("left", () => {
    const component = renderer.create(<Block left />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.justifyContent).toEqual("flex-start");
  });

  it("right", () => {
    const component = renderer.create(<Block right />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.justifyContent).toEqual("flex-end");
  });

  it("top", () => {
    const component = renderer.create(<Block top />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.justifyContent).toEqual("flex-start");
  });

  it("bottom", () => {
    const component = renderer.create(<Block bottom />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.justifyContent).toEqual("flex-end");
  });

  it("wrap", () => {
    const component = renderer.create(<Block wrap />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.flexWrap).toEqual("wrap");
  });

  it("padding={4}", () => {
    const component = renderer.create(<Block padding={4} />).toJSON();
    const instance = renderer.create(<Block padding={4} />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.padding).toEqual(4);
    expect(style.paddingTop).toEqual(4);
    expect(style.paddingRight).toEqual(4);
    expect(style.paddingBottom).toEqual(4);
    expect(style.paddingLeft).toEqual(4);
  });

  it("margin={6}", () => {
    const component = renderer.create(<Block margin={6} />).toJSON();
    const instance = renderer.create(<Block margin={6} />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.margin).toEqual(6);
    expect(style.marginTop).toEqual(6);
    expect(style.marginRight).toEqual(6);
    expect(style.marginBottom).toEqual(6);
    expect(style.marginLeft).toEqual(6);
  });

  it("animated", () => {
    const component = renderer.create(<Block animated />);
    // console.log("animated", component.getInstance());
    expect(component.getInstance().props.animated).toEqual(true);
  });

  it("shadow", () => {
    const component = renderer.create(<Block shadow />).toJSON();
    const instance = renderer.create(<Block shadow />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.shadow).toEqual(true);
    expect(style.shadowColor).toEqual(COLORS.black);
  });

  it('space="between"', () => {
    const component = renderer.create(<Block space="between" />).toJSON();
    const instance = renderer.create(<Block space="between" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.space).toEqual("between");
    expect(style.justifyContent).toEqual("space-between");
  });

  it("card", () => {
    const component = renderer.create(<Block card />).toJSON();
    const instance = renderer.create(<Block card />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.card).toEqual(true);
    expect(style.borderRadius).toEqual(SIZES.border);
  });

  it("radius={4}", () => {
    const component = renderer.create(<Block radius={4} />).toJSON();
    const instance = renderer.create(<Block radius={4} />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.radius).toEqual(4);
    expect(style.borderRadius).toEqual(4);
  });

  it('color="primary"', () => {
    const component = renderer.create(<Block color="primary" />).toJSON();
    const instance = renderer.create(<Block color="primary" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("primary");
    expect(style.backgroundColor).toEqual("primary");
  });

  it('color="secondary"', () => {
    const component = renderer.create(<Block color="secondary" />).toJSON();
    const instance = renderer.create(<Block color="secondary" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("secondary");
    expect(style.backgroundColor).toEqual("secondary");
  });

  it('color="tertiary"', () => {
    const component = renderer.create(<Block color="tertiary" />).toJSON();
    const instance = renderer.create(<Block color="tertiary" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("tertiary");
    expect(style.backgroundColor).toEqual("tertiary");
  });

  it('color="black"', () => {
    const component = renderer.create(<Block color="black" />).toJSON();
    const instance = renderer.create(<Block color="black" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("black");
    expect(style.backgroundColor).toEqual("black");
  });

  it('color="white"', () => {
    const component = renderer.create(<Block color="white" />).toJSON();
    const instance = renderer.create(<Block color="white" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("white");
    expect(style.backgroundColor).toEqual("white");
  });

  it('color="gray"', () => {
    const component = renderer.create(<Block color="gray" />).toJSON();
    const instance = renderer.create(<Block color="gray" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("gray");
    expect(style.backgroundColor).toEqual("gray");
  });

  it('color="alert"', () => {
    const component = renderer.create(<Block color="alert" />).toJSON();
    const instance = renderer.create(<Block color="alert" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("alert");
    expect(style.backgroundColor).toEqual("alert");
  });

  it('color="warning"', () => {
    const component = renderer.create(<Block color="warning" />).toJSON();
    const instance = renderer.create(<Block color="warning" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("warning");
    expect(style.backgroundColor).toEqual("warning");
  });

  it('color="success"', () => {
    const component = renderer.create(<Block color="success" />).toJSON();
    const instance = renderer.create(<Block color="success" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("success");
    expect(style.backgroundColor).toEqual("success");
  });

  it('color="info"', () => {
    const component = renderer.create(<Block color="info" />).toJSON();
    const instance = renderer.create(<Block color="info" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("info");
    expect(style.backgroundColor).toEqual("info");
  });

  it('color="#88B04B"', () => {
    const component = renderer.create(<Block color="#88B04B" />).toJSON();
    const instance = renderer.create(<Block color="#88B04B" />).getInstance();
    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("#88B04B");
    expect(style.backgroundColor).toEqual("#88B04B");
  });
});
