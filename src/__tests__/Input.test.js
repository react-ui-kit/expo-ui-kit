import { shallow } from "enzyme";
import React from "react";
import { StyleSheet } from "react-native";
import { fireEvent, render } from "react-native-testing-library";
import renderer from "react-test-renderer";
import Input from "../Input";
import { SIZES } from "../theme";
import { rgba } from "../utils";

const textInput = "text-input";

describe("<Input />", () => {
  it("render default", () => {
    const component = renderer.create(<Input />).toJSON();
    const style = StyleSheet.flatten(component.props.style);

    expect(style).toEqual({
      borderWidth: 1,
      height: SIZES.base * 5.5,
      borderRadius: SIZES.radius,
      borderColor: rgba("#4630EB", 0.4),
      paddingHorizontal: SIZES.base,
      fontSize: SIZES.font
    });
  });

  it('placeholder="input"', () => {
    const instance = renderer.create(<Input placeholder="input" />).root;
    expect(instance.props.placeholder).toEqual("input");
  });

  it("custom color, borderColor to opacity 0.4", () => {
    const input = renderer.create(<Input color="#DDDDDD" />);
    const component = input.toJSON();
    const instance = input.root;

    let style = StyleSheet.flatten(component.props.style);
    expect(style.borderColor).toEqual(rgba("#DDDDDD", 0.4));
    expect(instance.props.color).toEqual("#DDDDDD");
  });

  it("onFocus & onBlur", () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    const { getByTestId } = render(<Input onFocus={onFocus} onBlur={onBlur} />);

    fireEvent(getByTestId(textInput), "focus");

    expect(onFocus).toHaveBeenCalled();
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent(getByTestId(textInput), "blur");

    expect(onBlur).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("onChangeText", () => {
    const onChangeText = jest.fn().mockImplementation(value => value);
    const { getByTestId } = render(<Input onChangeText={onChangeText} />);

    const CHANGE_TEXT = "new value";
    fireEvent.changeText(getByTestId(textInput), CHANGE_TEXT);

    expect(onChangeText).toHaveBeenCalled();
    expect(onChangeText).toHaveBeenCalledTimes(1);
  });

  it('single pattern="(?=.*\\d)"', () => {
    const onChangeText = jest.fn().mockImplementation(value => value);
    const onValidation = jest.fn().mockImplementation(value => value);
    const { getByTestId } = render(
      <Input
        pattern="(?=.*\d)"
        onChangeText={value => onChangeText(value)}
        onValidation={value => onValidation(value)}
      />
    );

    // non valid digit pattern
    let CHANGE_TEXT = "non-digit";
    fireEvent.changeText(getByTestId(textInput), CHANGE_TEXT);

    expect(onChangeText).toHaveBeenCalled();
    expect(onChangeText).toHaveBeenCalledTimes(1);
    expect(onChangeText).toHaveBeenCalledWith(CHANGE_TEXT);
    expect(onValidation).toHaveBeenCalledWith(false);

    // valid digit pattern
    CHANGE_TEXT = "number5";
    fireEvent.changeText(getByTestId(textInput), CHANGE_TEXT);

    expect(onChangeText).toHaveBeenCalled();
    expect(onChangeText).toHaveBeenCalledTimes(2);
    expect(onChangeText).toHaveBeenCalledWith(CHANGE_TEXT);
    expect(onValidation).toHaveBeenCalledWith(true);
  });

  it("multiple patterns, validation=[false, false, false]", () => {
    const onChangeText = jest.fn().mockImplementation(value => value);
    const onValidation = jest.fn().mockImplementation(value => value);

    const { getByTestId } = render(
      <Input
        pattern={["^.{8,}$", "(?=.*d)", "(?=.*[A-Z])"]}
        onChangeText={value => onChangeText(value)}
        onValidation={value => onValidation(value)}
      />
    );

    // invalid pattern
    const CHANGE_TEXT = "test";
    fireEvent.changeText(getByTestId(textInput), CHANGE_TEXT);

    expect(onChangeText).toHaveBeenCalled();
    expect(onChangeText).toHaveBeenCalledTimes(1);
    expect(onChangeText).toHaveBeenCalledWith(CHANGE_TEXT);
    expect(onValidation).toHaveBeenCalledWith([false, false, false]);
  });

  it("multiple patterns, validation=[true, true, false]", () => {
    const onChangeText = jest.fn().mockImplementation(value => value);
    const onValidation = jest.fn().mockImplementation(value => value);

    const { getByTestId } = render(
      <Input
        pattern={["^.{8,}$", "(?=.*d)", "(?=.*[A-Z])"]}
        onChangeText={value => onChangeText(value)}
        onValidation={value => onValidation(value)}
      />
    );

    // invalid pattern
    const CHANGE_TEXT = "password1";
    fireEvent.changeText(getByTestId(textInput), CHANGE_TEXT);

    expect(onChangeText).toHaveBeenCalled();
    expect(onChangeText).toHaveBeenCalledTimes(1);
    expect(onChangeText).toHaveBeenCalledWith(CHANGE_TEXT);
    expect(onValidation).toHaveBeenCalledWith([true, true, false]);
  });

  it("multiple patterns, validation=[true, true, true]", () => {
    const onChangeText = jest.fn().mockImplementation(value => value);
    const onValidation = jest.fn().mockImplementation(value => value);
    const { getByTestId } = render(
      <Input
        pattern={["^.{8,}$", "(?=.*d)", "(?=.*[A-Z])"]}
        onChangeText={value => onChangeText(value)}
        onValidation={value => onValidation(value)}
      />
    );

    // invalid pattern
    const CHANGE_TEXT = "Password1";
    fireEvent.changeText(getByTestId(textInput), CHANGE_TEXT);

    expect(onChangeText).toHaveBeenCalled();
    expect(onChangeText).toHaveBeenCalledTimes(1);
    expect(onChangeText).toHaveBeenCalledWith(CHANGE_TEXT);
    expect(onValidation).toHaveBeenCalledWith([true, true, true]);
  });

  it("type: email using textContentType", () => {
    const input = renderer.create(<Input type="email" />);

    const instance = input.root;
    const tree = input.toTree();

    expect(instance.props.type).toEqual("email");
    expect(tree.rendered.props.textContentType).toEqual("emailAddress");
  });

  it("type: phone using textContentType", () => {
    const input = renderer.create(<Input type="phone" />);

    const instance = input.root;
    const tree = input.toTree();

    expect(instance.props.type).toEqual("phone");
    expect(tree.rendered.props.textContentType).toEqual("telephoneNumber");
  });

  it("type: custom using textContentType", () => {
    const input = renderer.create(<Input type="organizationName" />);

    const instance = input.root;
    const tree = input.toTree();

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
