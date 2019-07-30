import React, { PureComponent } from "react";
import { Animated, SafeAreaView, StyleSheet, View } from "react-native";

import expoTheme from "./theme";
import { getMargins, getPaddings, mergeTheme } from "./utils";

class Block extends PureComponent {
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
      // positioning
      space,
      padding,
      margin,
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
      styles.block,
      flex && { flex: flex === true ? 1 : flex },
      flex === false && { flex: 0 }, // reset / disable flex
      row && styles.row,
      column && styles.column,
      center && styles.center,
      middle && styles.middle,
      left && styles.left,
      right && styles.right,
      top && styles.top,
      bottom && styles.bottom,
      margin && { ...getMargins(margin) },
      padding && { ...getPaddings(padding) },
      wrap && styles.wrap,
      shadow && {
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: SIZES.radius * 3
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
      alert && { backgroundColor: COLORS.alert },
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
  flex: 1,
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
