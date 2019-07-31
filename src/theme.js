import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#4630EB",
  secondary: "#A3A1F7",
  tertiary: "#FFE358",

  // non-colors
  black: "#000020",
  white: "#FFFFFF",

  // color variations
  gray: "#535453",
  error: "#DC3545",
  warning: "#FFE358",
  success: "#4CD964",
  info: "#4DA1FF"
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 16,
  radius: 4,
  padding: 24,

  // font sizes
  h1: 34,
  h2: 24,
  h3: 20,
  title: 18,
  subtitle: 14,
  caption: 12,
  small: 10,

  // app dimensions
  width,
  height
};

export const FONTS = {
  h1: { fontSize: SIZES.h1, letterSpacing: 0.15 },
  h2: { fontSize: SIZES.h2, letterSpacing: 0 },
  h3: { fontSize: SIZES.h3, letterSpacing: 0.15 },
  title: { fontSize: SIZES.title, letterSpacing: 0.15 },
  subtitle: { fontSize: SIZES.body },
  caption: { fontSize: SIZES.caption, letterSpacing: 0.4 },
  small: { fontSize: SIZES.small, letterSpacing: 1.5 }
};

export default { COLORS, SIZES, FONTS };
