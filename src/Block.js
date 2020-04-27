import React from "react";
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from "react-native";

import expoTheme from "./theme";
import { getSpacing, mergeTheme, parseSpacing } from "./utils";

const getSpacings = ({
  type,
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
  theme = expoTheme
}) => {
  const { SIZES } = mergeTheme(expoTheme, theme);

  if (type === "margin") {
    return [
      margin && getSpacing(type, margin, SIZES?.base),
      marginTop && parseSpacing("marginTop", marginTop, SIZES?.base),
      marginRight && parseSpacing("marginRight", marginRight, SIZES?.base),
      marginBottom && parseSpacing("marginBottom", marginBottom, SIZES?.base),
      marginLeft && parseSpacing("marginLeft", marginLeft, SIZES?.base),
      marginVertical &&
        parseSpacing("marginVertical", marginVertical, SIZES?.base),
      marginHorizontal &&
        parseSpacing("marginHorizontal", marginHorizontal, SIZES?.base)
    ];
  }

  if (type === "padding") {
    return [
      padding && getSpacing(type, padding, SIZES?.base),
      paddingTop && parseSpacing("paddingTop", paddingTop, SIZES?.base),
      paddingRight && parseSpacing("paddingRight", paddingRight, SIZES?.base),
      paddingBottom &&
        parseSpacing("paddingBottom", paddingBottom, SIZES?.base),
      paddingLeft && parseSpacing("paddingLeft", paddingLeft, SIZES?.base),
      paddingVertical &&
        parseSpacing("paddingVertical", paddingVertical, SIZES?.base),
      paddingHorizontal &&
        parseSpacing("paddingHorizontal", paddingHorizontal, SIZES?.base)
    ];
  }
};

const Block = (props) => {
  const {
    flex = true,
    noflex = false,
    row = false,
    column = false,
    center = false,
    middle = false,
    left = false,
    right = false,
    top = false,
    bottom = false,
    card = false,
    shadow = null,
    elevation = 3,
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
    // size & positioning
    width = null,
    height = null,
    space = null,
    radius = null,
    wrap = false,
    // custom styling
    style = {},
    theme = {},
    // variations
    animated = false,
    safe = false,
    scroll = false,
    children = null,
    ...rest
  } = props;
  const { SIZES, COLORS } = mergeTheme(expoTheme, theme);
  const marginSpacing = getSpacings({ type: "margin", ...props });
  const paddingSpacing = getSpacings({ type: "padding", ...props });

  const blockStyles = StyleSheet.flatten([
    styles.block,
    flex && { flex: flex === true ? 1 : flex },
    (!flex || noflex) && { flex: 0 },
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
    card && { borderRadius: SIZES.radius },
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
    row && { flex: 0 },
    width && { width },
    height && { height },
    style // rewrite predefined styles
  ]);

  if (scroll) {
    return (
      <ScrollView {...rest} style={blockStyles}>
        {children}
      </ScrollView>
    );
  }

  if (animated) {
    return (
      <Animated.View {...rest} style={blockStyles}>
        {children}
      </Animated.View>
    );
  }

  if (safe) {
    return (
      <SafeAreaView {...rest} style={blockStyles}>
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View {...rest} style={blockStyles}>
      {children}
    </View>
  );
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
