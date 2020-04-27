import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

import expoTheme from "./theme";
import { getSpacing, mergeTheme, parseSpacing, rgba } from "./utils/index";

export const ButtonInstance = ({
  Touchable = TouchableOpacity,
  children,
  ...props
}) => <Touchable {...props}>{children}</Touchable>;

const Button = (props) => {
  const getSpacings = (type) => {
    const {
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginVertical,
      marginHorizontal,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingVertical,
      paddingHorizontal,
      theme
    } = props;
    const { SIZES } = mergeTheme(expoTheme, theme);

    if (type === "margin") {
      return [
        margin && getSpacing(type, margin, SIZES.base),
        marginTop && parseSpacing("marginTop", marginTop, SIZES.base),
        marginRight && parseSpacing("marginRight", marginRight, SIZES.base),
        marginBottom && parseSpacing("marginBottom", marginBottom, SIZES.base),
        marginLeft && parseSpacing("marginLeft", marginLeft, SIZES.base),
        marginVertical &&
          parseSpacing("marginVertical", marginVertical, SIZES.base),
        marginHorizontal &&
          parseSpacing("marginHorizontal", marginHorizontal, SIZES.base)
      ];
    }

    if (type === "padding") {
      return [
        padding && getSpacing(type, padding, SIZES.base),
        paddingTop && parseSpacing("paddingTop", paddingTop, SIZES.base),
        paddingRight && parseSpacing("paddingRight", paddingRight, SIZES.base),
        paddingBottom &&
          parseSpacing("paddingBottom", paddingBottom, SIZES.base),
        paddingLeft && parseSpacing("paddingLeft", paddingLeft, SIZES.base),
        paddingVertical &&
          parseSpacing("paddingVertical", paddingVertical, SIZES.base),
        paddingHorizontal &&
          parseSpacing("paddingHorizontal", paddingHorizontal, SIZES.base)
      ];
    }
  };
  const {
    disabled,
    opacity,
    outlined,
    flex,
    height,
    borderWidth,
    // colors
    color,
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
    borderColor,
    // support for touchables
    highlight,
    nativeFeedback,
    withoutFeedback,
    theme,
    style,
    children
  } = props;

  const excludeProps = [
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginVertical",
    "marginHorizontal",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingVertical",
    "paddingHorizontal"
  ];
  const extraProps = Object.keys(props).reduce((prop, key) => {
    if (!excludeProps.includes(`${key}`)) {
      prop[key] = props[key];
    }
    return prop;
  }, {});

  const { SIZES, COLORS } = mergeTheme({ ...expoTheme }, theme);
  const marginSpacing = getSpacings("margin");
  const paddingSpacing = getSpacings("padding");

  const buttonStyles = StyleSheet.flatten([
    {
      height: SIZES.base * 5.5,
      borderRadius: SIZES.radius,
      backgroundColor: color || COLORS.primary,
      justifyContent: "center"
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
    borderWidth && { borderWidth },
    borderColor && { borderColor },
    marginSpacing,
    paddingSpacing,
    style
  ]);

  const backgroundColor = StyleSheet.flatten(buttonStyles).backgroundColor;

  if (disabled) {
    buttonStyles.backgroundColor = rgba(backgroundColor, 0.5);
  }

  if (outlined) {
    buttonStyles.borderWidth = 1;
    buttonStyles.borderColor = backgroundColor;
    buttonStyles.backgroundColor = "transparent";
  }

  const Touchable = highlight
    ? TouchableHighlight
    : nativeFeedback
    ? TouchableNativeFeedback
    : withoutFeedback
    ? TouchableWithoutFeedback
    : TouchableOpacity;

  return (
    <ButtonInstance
      {...extraProps}
      disabled={disabled}
      Touchable={Touchable}
      activeOpacity={opacity}
      style={buttonStyles}
      children={children}
    />
  );
};

Button.defaultProps = {
  color: null,
  disabled: false,
  opacity: 0.8,
  outlined: false,
  margin: null,
  padding: null,
  flex: 0,
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
