import React, { Component } from "react";
import { Animated, SafeAreaView, StyleSheet, View } from "react-native";

import expoTheme from "./theme";
import { spacing, mergeTheme } from "./utils";

class Block extends Component {
  getSpacings(type) {
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
    } = this.props;
    const { SIZES } = mergeTheme(expoTheme, theme);

    if (type === "margin") {
      return [
        margin && spacing(type, margin, SIZES.base),
        marginTop && { marginTop: marginTop === true ? SIZES.base : marginTop },
        marginRight && {
          marginRight: marginRight === true ? SIZES.base : marginRight
        },
        marginBottom && {
          marginBottom: marginBottom === true ? SIZES.base : marginBottom
        },
        marginLeft && {
          marginLeft: marginLeft === true ? SIZES.base : marginLeft
        },
        marginVertical && {
          marginVertical: marginVertical === true ? SIZES.base : marginVertical
        },
        marginHorizontal && {
          marginHorizontal:
            marginHorizontal === true ? SIZES.base : marginHorizontal
        }
      ];
    }

    if (type === "padding") {
      return [
        padding && spacing(type, padding, SIZES.base),
        paddingTop && {
          paddingTop: paddingTop === true ? SIZES.base : paddingTop
        },
        paddingRight && {
          paddingRight: paddingRight === true ? SIZES.base : paddingRight
        },
        paddingBottom && {
          paddingBottom: paddingBottom === true ? SIZES.base : paddingBottom
        },
        paddingLeft && {
          paddingLeft: paddingLeft === true ? SIZES.base : paddingLeft
        },
        paddingVertical && {
          paddingVertical:
            paddingVertical === true ? SIZES.base : paddingVertical
        },
        paddingHorizontal && {
          paddingHorizontal:
            paddingHorizontal === true ? SIZES.base : paddingHorizontal
        }
      ];
    }

    return [];
  }

  render() {
    const {
      flex,
      row,
      column,
      center,
      middle,
      left,
      right,
      top,
      bottom,
      card,
      shadow,
      elevation,
      // colors
      color,
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
      // positioning
      space,
      radius,
      wrap,
      animated,
      theme,
      safe,
      style,
      children,
      ...props
    } = this.props;

    const { SIZES, COLORS } = mergeTheme(expoTheme, theme);
    const marginSpacing = this.getSpacings("margin");
    const paddingSpacing = this.getSpacings("padding");

    const blockStyles = StyleSheet.flatten([
      styles.block,
      flex && { flex: flex === true ? 1 : flex },
      !flex && { flex: 0 },
      row && styles.row,
      column && styles.column,
      center && styles.center,
      middle && styles.middle,
      left && styles.left,
      right && styles.right,
      top && styles.top,
      bottom && styles.bottom,
      marginSpacing,
      paddingSpacing,
      wrap && styles.wrap,
      shadow && {
        elevation,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: elevation - 1 },
        shadowOpacity: 0.1,
        shadowRadius: elevation
      },
      space && { justifyContent: `space-${space}` },
      card && { borderRadius: SIZES.border },
      radius && { borderRadius: radius },
      // color shortcuts
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
      style // rewrite predefined styles
    ]);

    if (animated) {
      return (
        <Animated.View style={blockStyles} {...props}>
          {children}
        </Animated.View>
      );
    }

    if (safe) {
      return (
        <SafeAreaView style={blockStyles} {...props}>
          {children}
        </SafeAreaView>
      );
    }

    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    );
  }
}

Block.defaultProps = {
  flex: true,
  row: false,
  column: false,
  center: false,
  middle: false,
  left: false,
  right: false,
  top: false,
  bottom: false,
  card: false,
  shadow: null,
  elevation: 3,
  color: null,
  space: null,
  margin: null,
  padding: null,
  radius: null,
  wrap: false,
  animated: false,
  safe: false,
  style: {},
  theme: {}
};

export default Block;

export const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  center: {
    alignItems: "center"
  },
  middle: {
    justifyContent: "center"
  },
  left: {
    justifyContent: "flex-start"
  },
  right: {
    justifyContent: "flex-end"
  },
  top: {
    justifyContent: "flex-start"
  },
  bottom: {
    justifyContent: "flex-end"
  },
  wrap: { flexWrap: "wrap" }
});
