import React, { Component } from "react";
import { Animated, SafeAreaView, StyleSheet, View } from "react-native";

import expoTheme from "./theme";
import { spacing, parseSpacing, mergeTheme } from "./utils";

/**
 * https://facebook.github.io/react-native/docs/view
 * https://facebook.github.io/react-native/docs/flexbox
 *
 * Usage:
 * - default Block has flex: 1
 *
 * <Block>components</Block>
 * - disable flex
 * <Block flex={0}>flex: 0</Block>
 *
 * - flex for half of the size
 * <Block flex={0.5}>flex: 0.5</Block>
 *
 * - row will render flexDirection: row
 * <Block row>
 *   <Text>text 1</Text>
 *   <Text>text 2</Text>
 * </Block>
 *
 * - vertical centering the content
 * <Block center>
 *   <Text>text 1</Text>
 *   <Text>text 2</Text>
 * </Block>
 * *
 * - horizontal centering the content
 * <Block middle>
 *   <Text>text 1</Text>
 *   <Text>text 2</Text>
 * </Block>
 *
 * - vertical & horizontal centering the content
 * <Block center middle>
 *   <Text>text 1</Text>
 *   <Text>text 2</Text>
 * </Block>
 *
 * Colors
 * - will render backgroundColor using predefined colors from theme.js COLORS array
 * - predefined colors: primary, secondary, tertiary, black, white, gray, error, warning, success, info
 *
 * <Block primary><Text>backgroundColor: COLORS.primary</Text></Block>
 * <Block secondary><Text>backgroundColor:  COLORS.secondary</Text></Block>
 *
 * - custom color using hex color
 * <Block color="#DDDDDD"><Text>backgroundColor: #DDDDDD</Text></Block>
 *
 * Arrange content using justifyContent
 * https://facebook.github.io/react-native/docs/layout-props#justifycontent
 * - space between the content
 * <Block space="between">
 *  <Text>1st text</Text>
 *  <Text>2nd text</Text>
 * </Block>
 *
 * - space evenly the content
 * <Block space="evenly">
 *  <Text>1st text</Text>
 *  <Text>2nd text</Text>
 * </Block>
 *
 * - space around the content
 * <Block space="around">
 *  <Text>1st text</Text>
 *  <Text>2nd text</Text>
 * </Block>
 *
 * Border radius
 * - round the corners using borderRadius: 6
 * <Block radius={6}>
 *  <Text>1st text</Text>
 *  <Text>2nd text</Text>
 * </Block>
 *
 * Border radius
 * - round the corners using borderRadius: 6
 * <Block radius={6}>
 *  <Text>1st text</Text>
 *  <Text>2nd text</Text>
 * </Block>
 *
 * Wrap content using flexWrap
 * by default flexWrap: 'nowrap'
 * https://facebook.github.io/react-native/docs/flexbox#flex-wrap
 *
 * - flexWrap: 'wrap'
 * <Block wrap>
 *  <Text>1st text</Text>
 *  <Text>2nd text</Text>
 *  <Text>3rd text</Text>
 * </Block>
 *
 * For animations animate props can be use to render Animated.View component
 * - animated will render Animated.View
 * <Block animated>
 *   <Text>animated view</Text>
 * </Block>
 *
 * For safe area views, safe props can be use to render SafeAreaView component
 * - safe will render SafeAreaView
 * <Block safe>
 *   <Text>safe area view</Text>
 * </Block>
 */

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
        padding && spacing(type, padding, SIZES.base),
        paddingTop && parseSpacing("paddingTop", paddingTop, SIZES.base),
        paddingRight && parseSpacing("paddingRight", paddingRight, SIZES.base),
        paddingBottom && parseSpacing("paddingBottom", paddingBottom, SIZES.base),
        paddingLeft && parseSpacing("paddingLeft", paddingLeft, SIZES.base),
        paddingVertical &&
          parseSpacing("paddingVertical", paddingVertical, SIZES.base),
        paddingHorizontal &&
          parseSpacing("paddingHorizontal", paddingHorizontal, SIZES.base)
      ];
    }
  }

  render() {
    const {
      flex,
      noflex,
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

    const { SIZES, COLORS } = mergeTheme(expoTheme, theme);
    const marginSpacing = this.getSpacings("margin");
    const paddingSpacing = this.getSpacings("padding");

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
        <Animated.View style={blockStyles} {...extraProps}>
          {children}
        </Animated.View>
      );
    }

    if (safe) {
      return (
        <SafeAreaView style={blockStyles} {...extraProps}>
          {children}
        </SafeAreaView>
      );
    }

    return (
      <View style={blockStyles} {...extraProps}>
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
