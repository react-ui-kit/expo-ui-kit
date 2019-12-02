import React from "react";
import renderer from "react-test-renderer";
import { StyleSheet } from "react-native";
import { shallow } from "enzyme";

import Block from "../Block";
import { SIZES } from "../theme";

const customTheme = {
  COLORS: {
    primary: "red"
  }
};

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

    component.setProps({ flex: 0 });
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

  it("paddingTop={6}, paddingRight={5}, paddingBottom={4}, paddingLeft={3}", () => {
    const component = shallow(
      <Block
        paddingTop={6}
        paddingRight={5}
        paddingBottom={4}
        paddingLeft={3}
      />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.paddingTop).toEqual(6);
    expect(component.instance().props.paddingRight).toEqual(5);
    expect(component.instance().props.paddingBottom).toEqual(4);
    expect(component.instance().props.paddingLeft).toEqual(3);
    expect(style).toEqual({
      flex: 1,
      paddingLeft: 3,
      paddingBottom: 4,
      paddingRight: 5,
      paddingTop: 6
    });
  });

  it("paddingTop='2x', paddingRight='3x', paddingBottom='4x', paddingLeft='5x'", () => {
    const component = shallow(
      <Block
        paddingTop="2x"
        paddingRight="3x"
        paddingBottom="4x"
        paddingLeft="5x"
      />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.paddingTop).toEqual("2x");
    expect(component.instance().props.paddingRight).toEqual("3x");
    expect(component.instance().props.paddingBottom).toEqual("4x");
    expect(component.instance().props.paddingLeft).toEqual("5x");
    expect(style).toEqual({
      flex: 1,
      paddingLeft: 40,
      paddingBottom: 32,
      paddingRight: 24,
      paddingTop: 16
    });
  });

  it("paddingHorizontal={6}, paddingVertical={8}", () => {
    const component = shallow(
      <Block paddingHorizontal={6} paddingVertical={8} />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.paddingHorizontal).toEqual(6);
    expect(component.instance().props.paddingVertical).toEqual(8);
    expect(style).toEqual({
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 6
    });
  });

  it("paddingHorizontal='2x', paddingVertical='0.5x'", () => {
    const component = shallow(
      <Block paddingHorizontal="2x" paddingVertical="0.5x" />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.paddingHorizontal).toEqual("2x");
    expect(component.instance().props.paddingVertical).toEqual("0.5x");
    expect(style).toEqual({
      flex: 1,
      paddingVertical: 4,
      paddingHorizontal: 16
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

  it("marginTop={6}, marginRight={5}, marginBottom={4}, marginLeft={3}", () => {
    const component = shallow(
      <Block marginTop={6} marginRight={5} marginBottom={4} marginLeft={3} />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.marginTop).toEqual(6);
    expect(component.instance().props.marginRight).toEqual(5);
    expect(component.instance().props.marginBottom).toEqual(4);
    expect(component.instance().props.marginLeft).toEqual(3);
    expect(style).toEqual({
      flex: 1,
      marginLeft: 3,
      marginBottom: 4,
      marginRight: 5,
      marginTop: 6
    });
  });

  it("marginTop='2x', marginRight='3x', marginBottom='4x', marginLeft='5x'", () => {
    const component = shallow(
      <Block
        marginTop="2x"
        marginRight="3x"
        marginBottom="4x"
        marginLeft="5x"
      />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.marginTop).toEqual("2x");
    expect(component.instance().props.marginRight).toEqual("3x");
    expect(component.instance().props.marginBottom).toEqual("4x");
    expect(component.instance().props.marginLeft).toEqual("5x");
    expect(style).toEqual({
      flex: 1,
      marginLeft: 40,
      marginBottom: 32,
      marginRight: 24,
      marginTop: 16
    });
  });

  it("marginHorizontal={6}, marginVertical={8}", () => {
    const component = shallow(
      <Block marginHorizontal={6} marginVertical={8} />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.marginHorizontal).toEqual(6);
    expect(component.instance().props.marginVertical).toEqual(8);
    expect(style).toEqual({
      flex: 1,
      marginVertical: 8,
      marginHorizontal: 6
    });
  });

  it("marginHorizontal='2x', marginVertical='0.5x'", () => {
    const component = shallow(
      <Block marginHorizontal="2x" marginVertical="0.5x" />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.marginHorizontal).toEqual("2x");
    expect(component.instance().props.marginVertical).toEqual("0.5x");
    expect(style).toEqual({
      flex: 1,
      marginVertical: 4,
      marginHorizontal: 16
    });
  });

  it("animated", () => {
    const component = shallow(<Block animated />);
    expect(component.instance().props.animated).toEqual(true);
    expect(component.name()).toEqual("AnimatedComponent");
  });

  it("safe", () => {
    const component = shallow(<Block safe />);
    expect(component.instance().props.safe).toEqual(true);
    expect(component.name()).toEqual("SafeAreaView");
  });

  it("shadow", () => {
    const component = shallow(<Block shadow />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.shadow).toEqual(true);
    expect(style.elevation).toEqual(3);
    expect(style.shadowColor).toEqual("#000020");
    expect(style.shadowOffset).toEqual({ width: 0, height: 2 });
    expect(style.shadowOpacity).toEqual(0.1);
    expect(style.shadowRadius).toEqual(3);
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
    expect(style.backgroundColor).toEqual("#4630EB");

    component.setProps({ secondary: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual("#A3A1F7");

    component.setProps({ tertiary: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual("#FFE358");

    component.setProps({ black: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual("#000020");

    component.setProps({ white: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual("#FFFFFF");

    component.setProps({ gray: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual("#535453");

    component.setProps({ error: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual("#DC3545");

    component.setProps({ warning: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual("#FFE358");

    component.setProps({ success: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual("#4CD964");

    component.setProps({ info: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual("#4DA1FF");

    component.setProps({ color: "#88B04B" });
    style = StyleSheet.flatten(component.props().style);
    expect(style.backgroundColor).toEqual("#88B04B");
  });

  it("custom theme for primary color", () => {
    const component = shallow(
      <Block primary theme={customTheme}>
        custom theme color
      </Block>
    );
    expect(component.instance().props.theme).toEqual(customTheme);

    let style = StyleSheet.flatten(component.props().style);

    expect(style.backgroundColor).toEqual("red");
  });
});
