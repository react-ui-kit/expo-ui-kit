import React, { Component } from "react";
import { Animated, Text, StyleSheet } from "react-native";

import expoTheme from "./theme";
import { getMargins, getPaddings, mergeTheme } from "./utils";

class Typography extends Component {
  render() {
    const {
      // fonts & sizes
      h1,
      h2,
      h3,
      title,
      subtitle,
      caption,
      small,
      size,
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
      // styling
      transform,
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      spacing, // letter-spacing
      height, // line-height
      // colors
      color,
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
      animated,
      theme,
      style,
      children,
      ...props
    } = this.props;

    const { SIZES, COLORS, FONTS } = mergeTheme({ ...expoTheme }, theme);

    const textStyles = StyleSheet.flatten([
      {
        fontWeight: "normal",
        fontSize: SIZES.font,
        color: COLORS.black
      },
      h1 && FONTS.h1,
      h2 && FONTS.h2,
      h3 && FONTS.h3,
      title && FONTS.title,
      subtitle && FONTS.subtitle,
      caption && FONTS.caption,
      small && FONTS.small,
      size && { fontSize: size },
      margin && { ...getMargins(margin) },
      marginTop && { marginTop },
      marginRight && { marginRight },
      marginBottom && { marginBottom },
      marginLeft && { marginLeft },
      marginVertical && { marginVertical },
      marginHorizontal && { marginHorizontal },
      padding && { ...getPaddings(padding) },
      paddingTop && { paddingTop },
      paddingRight && { paddingRight },
      paddingBottom && { paddingBottom },
      paddingLeft && { paddingLeft },
      paddingVertical && { paddingVertical },
      paddingHorizontal && { paddingHorizontal },
      transform && { textTransform: transform },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
      regular && { fontWeight: "normal" },
      bold && { fontWeight: "bold" },
      semibold && { fontWeight: "500" },
      medium && { fontWeight: "400" },
      light && { fontWeight: "300" },
      center && styles.center,
      right && styles.right,
      // color shortcuts
      primary && { color: COLORS.primary },
      secondary && { color: COLORS.secondary },
      tertiary && { color: COLORS.tertiary },
      black && { color: COLORS.black },
      white && { color: COLORS.white },
      gray && { color: COLORS.gray },
      alert && { color: COLORS.alert },
      warning && { color: COLORS.warning },
      success && { color: COLORS.success },
      info && { color: COLORS.info },
      color && { color },
      style // rewrite predefined styles
    ]);

    if (animated) {
      return (
        <Animated.Text style={textStyles} {...props}>
          {children}
        </Animated.Text>
      );
    }

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

Typography.defaultProps = {
  // fonts & sizes
  h1: false,
  h2: false,
  h3: false,
  title: false,
  subtitle: false,
  caption: false,
  small: false,
  size: null,
  margin: null,
  padding: null,
  // styling
  transform: null,
  regular: false,
  bold: false,
  semibold: false,
  medium: false,
  weight: false,
  light: false,
  center: false,
  right: false,
  spacing: null, // letter-spacing
  height: null, // line-height
  // colors
  color: null,
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

export default Typography;

const styles = StyleSheet.create({
  // positioning
  center: { textAlign: "center" },
  right: { textAlign: "right" }
});
