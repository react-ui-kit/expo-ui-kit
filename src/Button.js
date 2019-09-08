import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import expoTheme from "./theme";
import { getMargins, getPaddings, rgba, mergeTheme } from "./utils";

class Button extends Component {
  render() {
    const {
      color,
      disabled,
      opacity,
      outlined,
      margin,
      marginVertical,
      marginHorizontal,
      padding,
      paddingVertical,
      paddingHorizontal,
      flex,
      height,
      transparent,
      primary,
      secondary,
      tertiary,
      black,
      white,
      gray,
      error,
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
        justifyContent: "center",
        alignItems: "center"
      },
      transparent && { backgroundColor: "transparent" },
      primary && { backgroundColor: COLORS.primary },
      secondary && { backgroundColor: COLORS.secondary },
      tertiary && { backgroundColor: COLORS.tertiary },
      black && { backgroundColor: COLORS.black },
      white && { backgroundColor: COLORS.white },
      gray && { backgroundColor: COLORS.gray },
      error && { backgroundColor: COLORS.error },
      warning && { backgroundColor: COLORS.warning },
      success && { backgroundColor: COLORS.success },
      info && { backgroundColor: COLORS.info },
      color && { backgroundColor: color }, // custom backgroundColor
      flex && { flex }, // flex width
      height && { height }, // custom height
      margin && { ...getMargins(margin) },
      marginVertical && { marginVertical },
      marginHorizontal && { marginHorizontal },
      padding && { ...getPaddings(padding) },
      paddingVertical && { paddingVertical },
      paddingHorizontal && { paddingHorizontal },
      style
    ]);

    if (disabled) {
      const backgroundColor = StyleSheet.flatten(buttonStyles).backgroundColor;
      buttonStyles.backgroundColor = rgba(backgroundColor, 0.5);
    }

    if (outlined) {
      const backgroundColor = StyleSheet.flatten(buttonStyles).backgroundColor;
      buttonStyles.borderWidth = 1;
      buttonStyles.borderColor = backgroundColor;
      buttonStyles.backgroundColor = "transparent";
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
  margin: null,
  padding: null,
  flex: 0,
  height: false,
  transparent: false,
  primary: false,
  secondary: false,
  tertiary: false,
  black: false,
  white: false,
  gray: false,
  error: false,
  warning: false,
  success: false,
  info: false,
  theme: {},
  style: {}
};

export default Button;
