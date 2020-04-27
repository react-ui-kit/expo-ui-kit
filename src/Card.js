import React from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import expoTheme from "./theme";
import { mergeTheme, rgba } from "./utils/index";

const Card = (props) => {
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
    ...rest
  } = props;

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
      {...rest}
      color={color || COLORS.white}
      radius={radius || SIZES.radius}
      padding={padding || SIZES.base}
      style={cardStyles}>
      {children}
    </Block>
  );
};

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
