import React from "react";
import { Animated, StyleSheet, Text } from "react-native";

import expoTheme from "./theme";
import { mergeTheme, getMargins, getPaddings } from "./utils/index";

const Typography = ({
  // fonts & sizes
  h1 = false,
  h2 = false,
  h3 = false,
  title = false,
  subtitle = false,
  caption = false,
  small = false,
  size = null,
  margin = null,
  padding = null,
  // styling
  transform = null,
  regular = false,
  bold = false,
  semibold = false,
  medium = false,
  weight = false,
  light = false,
  center = false,
  right = false,
  spacing = null, // letter-spacing
  height = null, // line-height
  // colors
  color = null,
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
  animated = false,
  theme = {},
  style = {},
  children,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  ...rest
}) => {
  const { SIZES, COLORS, FONTS, WEIGHTS } = mergeTheme({ ...expoTheme }, theme);

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

  const textStyles = StyleSheet.flatten([
    {
      fontWeight: WEIGHTS.regular,
      fontSize: SIZES.font,
      color: COLORS.font
    },
    h1 && FONTS.h1,
    h2 && FONTS.h2,
    h3 && FONTS.h3,
    title && FONTS.title,
    subtitle && FONTS.subtitle,
    caption && FONTS.caption,
    small && FONTS.small,
    size && { fontSize: size },
    marginSpacing,
    paddingSpacing,
    transform && { textTransform: transform },
    height && { lineHeight: height },
    spacing && { letterSpacing: spacing },
    weight && { fontWeight: weight },
    regular && { fontWeight: WEIGHTS.regular },
    bold && { fontWeight: WEIGHTS.bold },
    semibold && { fontWeight: WEIGHTS.semibold },
    medium && { fontWeight: WEIGHTS.medium },
    light && { fontWeight: WEIGHTS.light },
    center && styles.center,
    right && styles.right,
    // color shortcuts
    primary && { color: COLORS.primary },
    secondary && { color: COLORS.secondary },
    tertiary && { color: COLORS.tertiary },
    black && { color: COLORS.black },
    white && { color: COLORS.white },
    gray && { color: COLORS.gray },
    error && { color: COLORS.error },
    warning && { color: COLORS.warning },
    success && { color: COLORS.success },
    info && { color: COLORS.info },
    color && { color },
    style // rewrite predefined styles
  ]);

  if (animated) {
    return (
      <Animated.Text {...rest} style={textStyles}>
        {children}
      </Animated.Text>
    );
  }

  return (
    <Text {...rest} style={textStyles}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  // positioning
  center: { textAlign: "center" },
  right: { textAlign: "right" }
});
