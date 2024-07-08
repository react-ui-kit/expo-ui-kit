import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import expoTheme from "./theme";
import { getMargins, getPaddings, mergeTheme, rgba } from "./utils/";

export const ButtonInstance = ({
  Touchable = TouchableOpacity,
  children,
  ...props
}) => <Touchable {...props}>{children}</Touchable>;

const Button = ({
  disabled = false,
  opacity = 0.8,
  outlined = false,
  flex = 0,
  height,
  width,
  borderWidth,
  color = null,
  transparent = false,
  primary = false,
  secondary = false,
  tertiary = false,
  black = false,
  white = false,
  gray = false,
  error = false,
  warning = false,
  success = false,
  info = false,
  borderColor,
  highlight,
  nativeFeedback,
  withoutFeedback,
  theme = {},
  style = {},
  children,
  margin = null,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding = null,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  ...rest
}) => {
  const { SIZES, COLORS } = mergeTheme({ ...expoTheme }, theme);

  const marginSpacing = getMargins({
    margin,
    marginHorizontal,
    marginVertical,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    defaultValue: SIZES.base
  });
  const paddingSpacing = getPaddings({
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    defaultValue: SIZES.base
  });

  const buttonStyles = StyleSheet.flatten([
    {
      minHeight: SIZES.base * 5.5,
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
    flex && { flex: flex === true ? 1 : flex }, // flex width
    height && { height }, // custom height
    width && { width }, // custom width
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
      disabled={disabled}
      Touchable={Touchable}
      style={buttonStyles}
      activeOpacity={opacity}
      children={children}
      {...rest}
    />
  );
};

export default Button;
