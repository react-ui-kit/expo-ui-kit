import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { rgba, mergeTheme } from "./utils";
import expoTheme from "./theme";

import Block from "./Block";

/**
 * https://facebook.github.io/react-native/docs/view
 * https://facebook.github.io/react-native/docs/flexbox
 *
 * Using Block component with predefined props: color, radius and padding
 * <Card>
 *  <Text>default card</Text>
 * </Card>
 *
 * Border radius using radius props
 *
 * <Card radius={8}>
 *  <Text>radius={8}</Text>
 * </Card>
 *
 * Padding using padding props
 * default padding={SIZES.base}
 *
 * <Card padding={12}>
 *  <Text>padding={12}</Text>
 * </Card>
 *
 * Set shadow using shadow props
 * default shadow with color black and elevation
 * shadowOffset is calculated using elevation - 1
 * shadowRadius is equal with elevation value
 *
 * <Card shadow>
 *  <Text>shadow</Text>
 * </Card>
 *
 * <Card shadow elevation={2}>
 *  <Text>shadow elevation={2}</Text>
 * </Card>
 *
 * Set borderColor using outlined prop
 * default borderWidth: 1 and borderColor: rgba(COLORS.black, 0.16) with alpha 0.16
 *
 * <Card outlined>
 *  <Text>outlined</Text>
 * </Card>
 *
 */

class Card extends Component {
  render() {
    const {
      color,
      radius,
      padding,
      shadow,
      elevation,
      outlined,
      theme,
      style,
      children,
      ...props
    } = this.props;

    const { SIZES, COLORS } = mergeTheme({ ...expoTheme }, theme);

    const cardStyles = StyleSheet.flatten([
      shadow && {
        elevation,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: elevation - 1 },
        shadowOpacity: 0.1,
        shadowRadius: elevation
      },
      outlined && {
        borderWidth: 1,
        borderColor: rgba(COLORS.black, 0.16)
      },
      style
    ]);

    return (
      <Block
        color={color || COLORS.white}
        radius={radius || SIZES.radius}
        padding={padding || SIZES.base}
        style={cardStyles}
        {...props}>
        {children}
      </Block>
    );
  }
}

Card.defaultProps = {
  color: null,
  radius: null,
  padding: null,
  shadow: false,
  elevation: 3,
  outlined: false,
  theme: {},
  style: {}
};

export default Card;
