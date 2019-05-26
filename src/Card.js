import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import * as expoTheme from "./theme";
import { rgba, mergeTheme } from "./utils";

class Card extends PureComponent {
  render() {
    const {
      color,
      radius,
      padding,
      shadow,
      outlined,
      theme,
      style,
      children,
      ...props
    } = this.props;

    const { SIZES, COLORS } = mergeTheme(expoTheme, theme);

    const cardStyles = StyleSheet.flatten([
      shadow && {
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: SIZES.radius * 3
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
  outlined: false,
  theme: null,
  style: {}
};

export default Card;
