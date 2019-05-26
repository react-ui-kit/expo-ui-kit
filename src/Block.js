import React, { PureComponent } from "react";
import { StyleSheet, View, Animated } from "react-native";

import * as expoTheme from "./theme";
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
      color,
      space,
      padding,
      margin,
      radius,
      wrap,
      animated,
      theme,
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
      color === "primary" && { backgroundColor: COLORS.primary },
      color === "secondary" && { backgroundColor: COLORS.secondary },
      color === "tertiary" && { backgroundColor: COLORS.tertiary },
      color === "black" && { backgroundColor: COLORS.black },
      color === "white" && { backgroundColor: COLORS.white },
      color === "gray" && { backgroundColor: COLORS.gray },
      color === "alert" && { backgroundColor: COLORS.alert },
      color === "warning" && { backgroundColor: COLORS.warning },
      color === "success" && { backgroundColor: COLORS.success },
      color === "info" && { backgroundColor: COLORS.info },
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

    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    );
  }
}

Block.defaultProps = {
  theme: null,
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
  margin: false,
  padding: false,
  radius: null,
  wrap: false,
  animated: false,
  style: {}
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
