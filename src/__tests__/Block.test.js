import React from "react";
import renderer from "react-test-renderer";
import { StyleSheet } from "react-native";
import { shallow } from "enzyme";

import Block from "../Block";
import { COLORS, SIZES } from "../theme";

describe("<Block />", () => {
  it("render default", () => {
    const component = renderer.create(<Block />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.flex).toEqual(1);
  });

  it("testing flex, flex={0.5}, flex={false}", () => {
    const component = shallow(<Block>flex</Block>);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.flex).toEqual(1);

    component.setProps({ flex: 0.5 });
    style = StyleSheet.flatten(component.props().style);
    expect(style.flex).toEqual(0.5);

    component.setProps({ flex: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.flex).toEqual(1);

    component.setProps({ flex: false });
    style = StyleSheet.flatten(component.props().style);
    expect(style.flex).toEqual(0);
  });

  it("testing flexDirection, row & column", () => {
    const component = shallow(<Block row>flexDirection</Block>);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.flexDirection).toEqual("row");

    component.setProps({ column: true });
    style = StyleSheet.flatten(component.props().style);
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
    const component = shallow(<Block padding={4} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.padding).toEqual(4);
    expect(style).toEqual({
      flex: 1,
      paddingBottom: 4,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 4
    });
  });

  it("padding={[2, 4]}", () => {
    const component = shallow(<Block padding={[2, 4]} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.padding).toEqual([2, 4]);
    expect(style).toEqual({
      flex: 1,
      paddingBottom: 2,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 2
    });
  });

  it("padding={[1, 2, 3, 4]}", () => {
    const component = shallow(<Block padding={[1, 2, 3, 4]} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.padding).toEqual([1, 2, 3, 4]);
    expect(style).toEqual({
      flex: 1,
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 2,
      paddingTop: 1
    });
  });

  it("margin={6}", () => {
    const component = shallow(<Block margin={6} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.margin).toEqual(6);
    expect(style).toEqual({
      flex: 1,
      marginBottom: 6,
      marginLeft: 6,
      marginRight: 6,
      marginTop: 6
    });
  });

  it("margin={[2, 4]}", () => {
    const component = shallow(<Block margin={[2, 4]} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.margin).toEqual([2, 4]);
    expect(style).toEqual({
      flex: 1,
      marginBottom: 2,
      marginLeft: 4,
      marginRight: 4,
      marginTop: 2
    });
  });

  it("margin={[1, 2, 3, 4]}", () => {
    const component = shallow(<Block margin={[1, 2, 3, 4]} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.margin).toEqual([1, 2, 3, 4]);
    expect(style).toEqual({
      flex: 1,
      marginBottom: 3,
      marginLeft: 4,
      marginRight: 2,
      marginTop: 1
    });
  });

  it("animated", () => {
    const component = shallow(<Block animated />);
    expect(component.instance().props.animated).toEqual(true);
  });

  it("safe", () => {
    const component = shallow(<Block safe />);
    expect(component.instance().props.safe).toEqual(true);
  });

  it("shadow", () => {
    const component = shallow(<Block shadow />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.shadow).toEqual(true);
    expect(style.shadowColor).toEqual(COLORS.black);
  });

  it('space="between"', () => {
    const component = shallow(<Block space="between" />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.space).toEqual("between");
    expect(style.justifyContent).toEqual("space-between");
  });

  it("card", () => {
    const component = shallow(<Block card />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.card).toEqual(true);
    expect(style.borderRadius).toEqual(SIZES.border);
  });

  it("radius={4}", () => {
    const component = shallow(<Block radius={4} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.radius).toEqual(4);
    expect(style.borderRadius).toEqual(4);
  });

  it("colors: primary, secondary, tertiary, black, white, gray, alert, warning, success, info, color", () => {
    const component = shallow(<Block>block color</Block>);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual(undefined);

    component.setProps({ primary: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual(COLORS.primary);

    component.setProps({ secondary: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual(COLORS.secondary);

    component.setProps({ tertiary: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual(COLORS.tertiary);

    component.setProps({ black: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual(COLORS.black);

    component.setProps({ white: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual(COLORS.white);

    component.setProps({ gray: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual(COLORS.gray);

    component.setProps({ alert: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual(COLORS.alert);

    component.setProps({ warning: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual(COLORS.warning);

    component.setProps({ success: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual(COLORS.success);

    component.setProps({ info: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual(COLORS.info);

    component.setProps({ color: "#88B04B" });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual("#88B04B");
  });
});
