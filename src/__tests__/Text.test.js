import React from "react";
import renderer from "react-test-renderer";
import { StyleSheet } from "react-native";
import { shallow } from "enzyme";

import Text from "../Text";
import { SIZES, COLORS, FONTS } from "../theme";

describe("<Text />", () => {
  it("render default", () => {
    const component = renderer.create(<Text />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style).toEqual({
      fontWeight: "normal",
      fontSize: SIZES.font,
      color: COLORS.black
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

  it("colors: primary, secondary, tertiary, black, white, gray, alert, warning, success, info, color", () => {
    const component = shallow(<Text>default color</Text>);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual(COLORS.black);

    component.setProps({ primary: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual(COLORS.primary);

    component.setProps({ secondary: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual(COLORS.secondary);

    component.setProps({ tertiary: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual(COLORS.tertiary);

    component.setProps({ black: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual(COLORS.black);

    component.setProps({ white: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual(COLORS.white);

    component.setProps({ gray: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual(COLORS.gray);

    component.setProps({ alert: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual(COLORS.alert);

    component.setProps({ warning: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual(COLORS.warning);

    component.setProps({ success: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual(COLORS.success);

    component.setProps({ info: true });
    style = StyleSheet.flatten(component.props().style);
    expect(style.color).toEqual(COLORS.info);

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
});
