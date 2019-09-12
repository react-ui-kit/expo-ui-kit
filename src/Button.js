import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";

import expoTheme from "./theme";
import { spacing, rgba, mergeTheme } from "./utils";

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

    const { SIZES, COLORS } = mergeTheme({ ...expoTheme }, theme);
    const marginSpacing = this.getSpacings("margin");
    const paddingSpacing = this.getSpacings("padding");

    const buttonStyles = StyleSheet.flatten([
      {
        height: SIZES.base * 5.5,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center"
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
        {...props}>
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
