import React, { PureComponent } from "react";
import { StyleSheet, TextInput } from "react-native";

import expoTheme from "./theme";
import { rgba, mergeTheme } from "./utils";

class Input extends PureComponent {
  state = {
    value: null,
    focused: false,
    blurred: false
  };

  handleValidation(value) {
    const { pattern } = this.props;
    if (!pattern) return true;

    // string pattern, one validation rule
    if (typeof pattern === "string") {
      const condition = new RegExp(pattern, "g");
      return condition.test(value);
    }

    // array patterns, multiple validation rules
    if (typeof pattern === "object") {
      const conditions = pattern.map(rule => new RegExp(rule, "g"));
      return conditions.map(condition => condition.test(value));
    }
  }

  handleChange(value) {
    const { onChangeText, onValidation } = this.props;
    const isValid = this.handleValidation(value);

    this.setState({ value }, () => {
      onValidation && onValidation(isValid);
      onChangeText && onChangeText(value);
    });
  }

  handleFocus(event) {
    const { onFocus } = this.props;
    this.setState({ focused: true, blurred: false }, () => {
      onFocus && onFocus(event);
    });
  }

  handleBlur(event) {
    const { onBlur } = this.props;
    this.setState({ focused: false, blurred: true }, () => {
      onBlur && onBlur(event);
    });
  }

  handleTextType(type) {
    return type === "email"
      ? "emailAddress"
      : type === "phone"
      ? "telephoneNumber"
      : type;
  }

  render() {
    const {
      autoCorrect,
      autoCapitalize,
      placeholder,
      children,
      color,
      type,
      style,
      theme,
      internalRef,
      ...props
    } = this.props;
    const { SIZES, COLORS } = mergeTheme({ ...expoTheme }, theme);

    const textStyles = StyleSheet.flatten([
      {
        borderWidth: 1,
        height: SIZES.base * 5.5,
        borderRadius: SIZES.radius,
        borderColor: rgba(color || COLORS.primary, 0.4),
        paddingHorizontal: SIZES.base,
        fontSize: SIZES.font
      },
      style
    ]);
    const textType = this.handleTextType(type);

    const internalProps = {
      style: textStyles,
      autoCorrect,
      autoCapitalize,
      placeholder,
      textContentType: textType,
      value: this.state.value,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChangeText: this.handleChange
    };

    return (
      <TextInput ref={internalRef} {...internalProps} {...props}>
        {children}
      </TextInput>
    );
  }
}

Input.defaultProps = {
  pattern: null,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onValidation: null,
  placeholder: null,
  autoCorrect: false,
  autoCapitalize: "none",
  color: null,
  internalRef: null,
  theme: {},
  style: {}
};

export default Input;
