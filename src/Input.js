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

  onChange(value) {
    const { onChange, onValidation } = this.props;
    const isValid = this.handleValidation(value);

    this.setState({ value }, () => {
      onValidation && onValidation(isValid);
      onChange && onChange(value);
    });
  }

  onFocus(event) {
    const { onFocus } = this.props;
    this.setState({ focused: true, blurred: false }, () => {
      onFocus && onFocus(event);
    });
  }

  onBlur(event) {
    const { onBlur } = this.props;
    this.setState({ focused: false, blurred: true }, () => {
      onBlur && onBlur(event);
    });
  }

  render() {
    const { placeholder, children, theme, color, style, ...props } = this.props;
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

    return (
      <TextInput
        style={textStyles}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={placeholder}
        value={this.state.value}
        onFocus={event => this.onFocus(event)}
        onBlur={event => this.onBlur(event)}
        onChange={value => this.onChange(value)}
        {...props}>
        {children}
      </TextInput>
    );
  }
}

Input.defaultProps = {
  flex: false,
  pattern: null,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onValidation: null,
  placeholder: null,
  color: null,
  theme: {},
  style: {}
};

export default Input;
