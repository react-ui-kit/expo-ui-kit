import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import expoTheme from "./theme";
import { rgba, mergeTheme } from "./utils";

class Button extends Component {
  render() {
    const {
      color,
      disabled,
      opacity,
      outlined,
      transparent,
      primary,
      secondary,
      tertiary,
      black,
      white,
      gray,
      alert,
      warning,
      success,
      info,
      theme,
      style,
      children,
      ...props
    } = this.props;

    const { SIZES, COLORS } = mergeTheme({ ...expoTheme }, theme);

    const buttonStyles = StyleSheet.flatten([
      {
        height: SIZES.base * 5.5,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        justifyContent: "center"
      },
      transparent && { backgroundColor: "transparent" },
      primary && { backgroundColor: COLORS.primary },
      secondary && { backgroundColor: COLORS.secondary },
      tertiary && { backgroundColor: COLORS.tertiary },
      black && { backgroundColor: COLORS.black },
      white && { backgroundColor: COLORS.white },
      gray && { backgroundColor: COLORS.gray },
      alert && { backgroundColor: COLORS.alert },
      warning && { backgroundColor: COLORS.warning },
      success && { backgroundColor: COLORS.success },
      info && { backgroundColor: COLORS.info },
      color && { backgroundColor: color }, // custom backgroundColor
      outlined && {
        borderWidth: 1,
        color: COLORS.primary,
        borderColor: COLORS.primary,
        backgroundColor: "transparent"
      },
      style
    ]);

    if (disabled) {
      const backgroundColor = StyleSheet.flatten(buttonStyles).backgroundColor;
      buttonStyles.backgroundColor = rgba(backgroundColor, 0.5);
    }

    return (
      <TouchableOpacity
        disabled={disabled}
        style={buttonStyles}
        activeOpacity={opacity}
        {...props}>
        {children}
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  color: null,
  disabled: false,
  opacity: 0.8,
  outlined: false,
  transparent: false,
  primary: false,
  secondary: false,
  tertiary: false,
  black: false,
  white: false,
  gray: false,
  alert: false,
  warning: false,
  success: false,
  info: false,
  theme: {},
  style: {}
};

export default Button;
