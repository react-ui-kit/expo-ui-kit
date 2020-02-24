import React from "react";
import renderer from "react-test-renderer";
import { StyleSheet } from "react-native";
import { shallow } from "enzyme";

import Text from "../Text";
import { SIZES, FONTS } from "../theme";

describe("<Text />", () => {
  it("render default", () => {
    const component = renderer.create(<Text />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000"
    });
  });

  it("h1, h2, h3, title, subtitle, caption, small, size", () => {
    const component = shallow(<Text h1>h1</Text>);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.fontSize).toEqual(FONTS.h1.fontSize);

    component.setProps({ h2: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontSize).toEqual(FONTS.h2.fontSize);

    component.setProps({ h3: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontSize).toEqual(FONTS.h3.fontSize);

    component.setProps({ title: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontSize).toEqual(FONTS.title.fontSize);

    component.setProps({ subtitle: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontSize).toEqual(FONTS.subtitle.fontSize);

    component.setProps({ caption: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontSize).toEqual(FONTS.caption.fontSize);

    component.setProps({ small: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontSize).toEqual(FONTS.small.fontSize);

    component.setProps({ size: 13 });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontSize).toEqual(13);
  });

  it("padding={6}", () => {
    const component = shallow(<Text padding={6} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.padding).toEqual(6);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      paddingBottom: 6,
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 6
    });
  });

  it("padding={[2, 4]}", () => {
    const component = shallow(<Text padding={[2, 4]} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.padding).toEqual([2, 4]);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      paddingBottom: 2,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 2
    });
  });

  it("padding={[1, 2, 3, 4]}", () => {
    const component = shallow(<Text padding={[1, 2, 3, 4]} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.padding).toEqual([1, 2, 3, 4]);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 2,
      paddingTop: 1
    });
  });

  it("paddingTop={6}, paddingRight={5}, paddingBottom={4}, paddingLeft={3}", () => {
    const component = shallow(
      <Text paddingTop={6} paddingRight={5} paddingBottom={4} paddingLeft={3} />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.paddingTop).toEqual(6);
    expect(component.instance().props.paddingRight).toEqual(5);
    expect(component.instance().props.paddingBottom).toEqual(4);
    expect(component.instance().props.paddingLeft).toEqual(3);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      paddingLeft: 3,
      paddingBottom: 4,
      paddingRight: 5,
      paddingTop: 6
    });
  });

  it("paddingTop='2x', paddingRight='3x', paddingBottom='4x', paddingLeft='5x'", () => {
    const component = shallow(
      <Text
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
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      paddingLeft: 40,
      paddingBottom: 32,
      paddingRight: 24,
      paddingTop: 16
    });
  });

  it("paddingHorizontal={6}, paddingVertical={8}", () => {
    const component = shallow(
      <Text paddingHorizontal={6} paddingVertical={8} />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.paddingHorizontal).toEqual(6);
    expect(component.instance().props.paddingVertical).toEqual(8);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      paddingVertical: 8,
      paddingHorizontal: 6
    });
  });

  it("paddingHorizontal='2x', paddingVertical='0.5x'", () => {
    const component = shallow(
      <Text paddingHorizontal="2x" paddingVertical="0.5x" />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.paddingHorizontal).toEqual("2x");
    expect(component.instance().props.paddingVertical).toEqual("0.5x");
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      paddingVertical: 4,
      paddingHorizontal: 16
    });
  });

  it("margin={6}", () => {
    const component = shallow(<Text margin={6} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.margin).toEqual(6);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      marginBottom: 6,
      marginLeft: 6,
      marginRight: 6,
      marginTop: 6
    });
  });

  it("margin={[2, 4]}", () => {
    const component = shallow(<Text margin={[2, 4]} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.margin).toEqual([2, 4]);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      marginBottom: 2,
      marginLeft: 4,
      marginRight: 4,
      marginTop: 2
    });
  });

  it("margin={[1, 2, 3, 4]}", () => {
    const component = shallow(<Text margin={[1, 2, 3, 4]} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.margin).toEqual([1, 2, 3, 4]);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      marginBottom: 3,
      marginLeft: 4,
      marginRight: 2,
      marginTop: 1
    });
  });

  it("marginTop={6}, marginRight={5}, marginBottom={4}, marginLeft={3}", () => {
    const component = shallow(
      <Text marginTop={6} marginRight={5} marginBottom={4} marginLeft={3} />
    );
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.marginTop).toEqual(6);
    expect(component.instance().props.marginRight).toEqual(5);
    expect(component.instance().props.marginBottom).toEqual(4);
    expect(component.instance().props.marginLeft).toEqual(3);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      marginLeft: 3,
      marginBottom: 4,
      marginRight: 5,
      marginTop: 6
    });
  });

  it("marginHorizontal={6}, marginVertical={8}", () => {
    const component = shallow(<Text marginHorizontal={6} marginVertical={8} />);
    const style = StyleSheet.flatten(component.props().style);
    expect(component.instance().props.marginHorizontal).toEqual(6);
    expect(component.instance().props.marginVertical).toEqual(8);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: "#000000",
      marginVertical: 8,
      marginHorizontal: 6
    });
  });

  it('transform="uppercase"', () => {
    const component = shallow(<Text transform="uppercase">uppercase</Text>);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.textTransform).toEqual("uppercase");
  });

  it("lineHeight using height={32}", () => {
    const component = shallow(<Text height={32}>lineHeight 32</Text>);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.lineHeight).toEqual(32);
  });

  it("letterSpacing using spacing={0.4}", () => {
    const component = shallow(<Text>letterSpacing 0.4</Text>);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.letterSpacing).toEqual(undefined);

    component.setProps({ spacing: 0.4 });
    style = StyleSheet.flatten(component.props().style);
    expect(style.letterSpacing).toEqual(0.4);
  });

  it("fontWeight using weight, regular, bold, semibold, medium, light", () => {
    const component = shallow(<Text>fontWeight</Text>);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.fontWeight).toEqual("normal");

    component.setProps({ weight: "900" });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontWeight).toEqual("900");

    component.setProps({ regular: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontWeight).toEqual("normal");

    component.setProps({ bold: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontWeight).toEqual("bold");

    component.setProps({ semibold: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontWeight).toEqual("500");

    component.setProps({ medium: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontWeight).toEqual("400");

    component.setProps({ light: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.fontWeight).toEqual("300");
  });

  it("colors: primary, secondary, tertiary, black, white, gray, error, warning, success, info, color", () => {
    const component = shallow(<Text>default color</Text>);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#000000");

    component.setProps({ primary: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#4630EB");

    component.setProps({ secondary: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#A3A1F7");

    component.setProps({ tertiary: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#FFE358");

    component.setProps({ black: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#000020");

    component.setProps({ white: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#FFFFFF");

    component.setProps({ gray: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#535453");

    component.setProps({ error: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#DC3545");

    component.setProps({ warning: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#FFE358");

    component.setProps({ success: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#4CD964");

    component.setProps({ info: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#4DA1FF");

    component.setProps({ color: "#88B04B" });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual("#88B04B");
  });

  it("textAlign using center or right", () => {
    const component = shallow(<Text>textAlign</Text>);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.textAlign).toEqual(undefined);

    component.setProps({ center: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.textAlign).toEqual("center");

    component.setProps({ right: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.textAlign).toEqual("right");
  });

  it("animated", () => {
    const component = shallow(<Text animated />);
    expect(component.instance().props.animated).toEqual(true);
    expect(component.name()).toEqual("AnimatedComponent");
  });

  it("onPress", () => {
    const onPress = jest.fn();
    const component = shallow(<Text onPress={onPress} />);
    component.dive().simulate("press");
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
