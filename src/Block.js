import React, { Component } from "react";
import { Animated, SafeAreaView, StyleSheet, View } from "react-native";

import expoTheme from "./theme";
import { getMargins, getPaddings, mergeTheme } from "./utils";

class Block extends Component {
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

    const blockStyles = StyleSheet.flatten([
      flex && { flex: flex === true ? 1 : flex },
      row && styles.row,
      column && styles.column,
      center && styles.center,
      middle && styles.middle,
      left && styles.left,
      right && styles.right,
      top && styles.top,
      bottom && styles.bottom,
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
  flex: false,
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
