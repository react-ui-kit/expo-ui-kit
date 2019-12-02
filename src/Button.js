import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";

import expoTheme from "./theme";
import { spacing, parseSpacing, rgba, mergeTheme } from "./utils";

/**
 * https://facebook.github.io/react-native/docs/touchableopacity
 * https://facebook.github.io/react-native/docs/touchablehighlight
 * https://facebook.github.io/react-native/docs/touchablenativefeedback
 * https://facebook.github.io/react-native/docs/touchablewithoutfeedback
 *
 * Default render an instance of TouchableOpacity
 *
 * - TouchableHighlight
 * <Button highlight><Text>instance of TouchableHighlight</Text></Button>
 *
 * - TouchableNativeFeedback
 * <Button nativeFeedback><Text>instance of TouchableNativeFeedback</Text></Button>
 *
 * - TouchableWithoutFeedback
 * <Button withoutFeedback><Text>instance of TouchableWithoutFeedback</Text></Button>
 *
 * Colors
 * - will render backgroundColor using predefined colors from theme.js COLORS array
 * - predefined colors: primary, secondary, tertiary, black, white, gray, error, warning, success, info
 *
 * <Button primary><Text>backgroundColor: COLORS.primary</Text></Button>
 * <Button transparent><Text>backgroundColor: "transparent"</Text></Button>
 *
 * - custom color using hex color
 * <Button color="#DDDDDD"><Text>backgroundColor: #DDDDDD</Text></Button>
 *
 * Set activeOpacity using opacity prop
 * default activeOpacity=0.8
 * <Button opacity={0.5}><Text>opacity={0.5}</Text></Button>
 *
 * Outlined and add borderColor equal with backgroundColor
 * <Button primary outlined><Text>outlined</Text></Button>
 *
 * Disabling the button
 * <Button disabled><Text>disabled</Text></Button>
 * <Button disabled={false}><Text>false</Text></Button>
 *
 * Add flex to button style
 * <Button flex><Text>flex=1</Text></Button>
 * <Button flex={2}><Text>flex=2</Text></Button>
 *
 * Add height to button style
 * <Button height={58}><Text>height=58</Text></Button>
 *
 */

class Button extends Component {
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
        paddingBottom &&
          parseSpacing("paddingBottom", paddingBottom, SIZES.base),
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
      disabled,
      opacity,
      outlined,
      flex,
      height,
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
      // support for touchables
      highlight,
      nativeFeedback,
      withoutFeedback,
      theme,
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

    const { SIZES, COLORS } = mergeTheme({ ...expoTheme }, theme);
    const marginSpacing = this.getSpacings("margin");
    const paddingSpacing = this.getSpacings("padding");

    const buttonStyles = StyleSheet.flatten([
      {
        height: SIZES.base * 5.5,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
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
      marginSpacing,
      paddingSpacing,
      style
    ]);

    if (disabled) {
      const backgroundColor = StyleSheet.flatten(buttonStyles).backgroundColor;
      buttonStyles.backgroundColor = rgba(backgroundColor, 0.5);
    }

    if (outlined) {
      const backgroundColor = StyleSheet.flatten(buttonStyles).backgroundColor;
      buttonStyles.borderWidth = 1;
      buttonStyles.borderColor = backgroundColor;
      buttonStyles.backgroundColor = "transparent";
    }

    const ButtonType = highlight
      ? TouchableHighlight
      : nativeFeedback
      ? TouchableNativeFeedback
      : withoutFeedback
      ? TouchableWithoutFeedback
      : TouchableOpacity;

    return (
      <ButtonType
        disabled={disabled}
        style={buttonStyles}
        activeOpacity={opacity}
        {...extraProps}>
        {children}
      </ButtonType>
    );
  }
}

Button.defaultProps = {
  color: null,
  disabled: false,
  opacity: 0.8,
  outlined: false,
  margin: null,
  padding: null,
  flex: 0,
  height: false,
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
