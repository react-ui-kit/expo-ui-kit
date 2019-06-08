import React from "react";
import renderer from "react-test-renderer";
import { StyleSheet } from "react-native";
import { shallow } from "enzyme";

import Input from "../Input";
import { rgba } from "../utils";
import { COLORS, SIZES } from "../theme";

describe("<Input />", () => {
  it("render default", () => {
    const component = renderer.create(<Input />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style).toEqual({
      borderWidth: 1,
      height: SIZES.base * 5.5,
      borderRadius: SIZES.radius,
      borderColor: rgba(COLORS.primary, 0.4),
      paddingHorizontal: SIZES.base,
      fontSize: SIZES.font
    });
  });

  it('placeholder="input"', () => {
    const instance = renderer
      .create(<Input placeholder="input" />)
      .getInstance();
    expect(instance.props.placeholder).toEqual("input");
  });

  it("custom color, borderColor to opacity 0.4", () => {
    const component = shallow(<Input color="#DDDDDD" />);
    let style = StyleSheet.flatten(component.props().style);
    expect(style.borderColor).toEqual(rgba("#DDDDDD", 0.4));
    expect(component.instance().props.color).toEqual("#DDDDDD");
  });

  it("onFocus & onBlur", () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const instance = renderer
      .create(<Input onFocus={onFocus} onBlur={onBlur} />)
      .getInstance();

    instance.onFocus();
    expect(instance.state.focused).toEqual(true);
    expect(onFocus).toHaveBeenCalled();
    expect(onFocus).toHaveBeenCalledTimes(1);

    instance.onBlur();
    expect(instance.state.focused).toEqual(false);
    expect(instance.state.blurred).toEqual(true);
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("onChange", () => {
    const onChange = jest.fn().mockImplementation(value => value);
    const component = renderer.create(<Input onChange={onChange} />);
    const instance = component.getInstance();

    instance.onChange("new value");
    expect(instance.state.value).toEqual("new value");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('single pattern="(?=.*\\d)"', () => {
    const onChange = jest.fn().mockImplementation(value => value);
    const onValidation = jest.fn().mockImplementation(value => value);
    const instance = renderer
      .create(
        <Input
          pattern="(?=.*\d)"
          onChange={value => onChange(value)}
          onValidation={value => onValidation(value)}
        />
      )
      .getInstance();

    // non valid digit pattern
    instance.onChange("non-digit");
    expect(instance.state.value).toEqual("non-digit");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("non-digit");
    expect(onValidation).toHaveBeenCalledWith(false);

    // valid digit pattern
    instance.onChange("number5");
    expect(instance.state.value).toEqual("number5");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith("number5");
    expect(onValidation).toHaveBeenCalledWith(true);
  });

  it("multiple patterns, validation=[false, false, false]", () => {
    const onChange = jest.fn().mockImplementation(value => value);
    const onValidation = jest.fn().mockImplementation(value => value);
    const instance = renderer
      .create(
        <Input
          pattern={["^.{8,}$", "(?=.*d)", "(?=.*[A-Z])"]}
          onChange={value => onChange(value)}
          onValidation={value => onValidation(value)}
        />
      )
      .getInstance();

    // invalid pattern
    instance.onChange("test");
    expect(instance.state.value).toEqual("test");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("test");
    expect(onValidation).toHaveBeenCalledWith([false, false, false]);
  });

  it("multiple patterns, validation=[true, true, false]", () => {
    const onChange = jest.fn().mockImplementation(value => value);
    const onValidation = jest.fn().mockImplementation(value => value);
    const instance = renderer
      .create(
        <Input
          pattern={["^.{8,}$", "(?=.*d)", "(?=.*[A-Z])"]}
          onChange={value => onChange(value)}
          onValidation={value => onValidation(value)}
        />
      )
      .getInstance();

    // invalid pattern
    instance.onChange("password1");
    expect(instance.state.value).toEqual("password1");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("password1");
    expect(onValidation).toHaveBeenCalledWith([true, true, false]);
  });

  it("multiple patterns, validation=[true, true, true]", () => {
    const onChange = jest.fn().mockImplementation(value => value);
    const onValidation = jest.fn().mockImplementation(value => value);
    const instance = renderer
      .create(
        <Input
          pattern={["^.{8,}$", "(?=.*d)", "(?=.*[A-Z])"]}
          onChange={value => onChange(value)}
          onValidation={value => onValidation(value)}
        />
      )
      .getInstance();

    // invalid pattern
    instance.onChange("Password1");
    expect(instance.state.value).toEqual("Password1");
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("Password1");
    expect(onValidation).toHaveBeenCalledWith([true, true, true]);
  });

  it("type: email using textContentType", () => {
    const instance = renderer.create(<Input type="email" />).getInstance();
    const tree = renderer.create(<Input type="email" />).toTree();
    // console.log("component", component.toTree());
    expect(instance.props.type).toEqual("email");
    expect(tree.rendered.props.textContentType).toEqual("emailAddress");
  });

  it("type: phone using textContentType", () => {
    const instance = renderer.create(<Input type="phone" />).getInstance();
    const tree = renderer.create(<Input type="phone" />).toTree();
    expect(instance.props.type).toEqual("phone");
    expect(tree.rendered.props.textContentType).toEqual("telephoneNumber");
  });

  it("type: custom using textContentType", () => {
    const instance = renderer
      .create(<Input type="organizationName" />)
      .getInstance();
    const tree = renderer.create(<Input type="organizationName" />).toTree();
    expect(instance.props.type).toEqual("organizationName");
    expect(tree.rendered.props.textContentType).toEqual("organizationName");
  });

  it("autoCorrect, autoCapitalize", () => {
    const component = shallow(<Input />);
    expect(component.props().autoCorrect).toEqual(false);
    expect(component.props().autoCapitalize).toEqual("none");

    component.setProps({ autoCorrect: true });
    expect(component.props().autoCorrect).toEqual(true);

    component.setProps({ autoCapitalize: "words" });
    expect(component.props().autoCapitalize).toEqual("words");
  });
});
