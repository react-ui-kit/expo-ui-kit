/**
 * Global Component Types
 */

interface SizingProps {
  width?: number | string;
  height?: number | string;
}

interface ColorsProps {
  color?: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  black?: boolean;
  white?: boolean;
  gray?: boolean;
  error?: boolean;
  warning?: boolean;
  success?: boolean;
  info?: boolean;
}

interface PositioningProps {
  flex?: number | boolean;
  noflex?: boolean;
  space?: string;
  row?: boolean;
  column?: boolean;
  center?: boolean;
  middle?: boolean;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}

interface StylingProps {
  opacity?: number;
  color?: string;
  shadow?: boolean;
  elevation?: number;
  radius?: number;
  wrap?: boolean;
  style?: Record<string, any>;
  theme?: CustomTheme;
}

declare type StringNumberBoolean = string | number | boolean;
declare type SNB = StringNumberBoolean;

interface ExcludedProps {
  margin?: SNB | number[];
  marginTop?: SNB;
  marginRight?: SNB;
  marginBottom?: SNB;
  marginLeft?: SNB;
  marginVertical?: SNB;
  marginHorizontal?: SNB;
  padding?: SNB | number[];
  paddingTop?: SNB;
  paddingRight?: SNB;
  paddingBottom?: SNB;
  paddingLeft?: SNB;
  paddingVertical?: SNB;
  paddingHorizontal?: SNB;
}

export interface ThemeProps
  extends SizingProps,
    PositioningProps,
    StylingProps,
    ColorsProps,
    ExcludedProps {}

/**
 * The Subtract type is a difference operator as it does T - K and return the difference.
 * @param T - Minuend, base value
 * @param K - Subtraend, the props you want to discard
 * @returns Rest or difference of the operation
 */

export type Subtract<T, K> = Pick<T, Exclude<keyof T, keyof K>>;
export type ExtraProps<P> = Subtract<P, ExcludedProps>;

/**
 * Global Theme Variables
 */

export type Colors = {
  font: string;
  primary: string;
  secondary: string;
  tertiary: string;
  black: string;
  white: string;
  gray: string;
  error: string;
  warning: string;
  success: string;
  info: string;
};

export type Sizes = {
  // global sizes
  base: number;
  font: number;
  radius: number;
  padding: number;

  // font sizes
  h1: number;
  h2: number;
  h3: number;
  title: number;
  subtitle: number;
  caption: number;
  small: number;

  // app dimensions
  width: number;
  height: number;
};

export type Fonts = {
  h1: { fontSize?: Sizes["h1"]; letterSpacing?: number };
  h2: { fontSize?: Sizes["h2"]; letterSpacing?: number };
  h3: { fontSize?: Sizes["h3"]; letterSpacing?: number };
  title: { fontSize?: Sizes["title"]; letterSpacing?: number };
  subtitle: { fontSize?: Sizes["subtitle"]; letterSpacing?: number };
  caption: { fontSize?: Sizes["caption"]; letterSpacing?: number };
  small: { fontSize?: Sizes["small"]; letterSpacing?: number };
};

export type Weights = {
  regular: string;
  bold: string;
  semibold: string;
  medium: string;
  light: string;
};

export interface DefaultTheme {
  FONTS?: Partial<Fonts>;
  SIZES?: Partial<Sizes>;
  WEIGHTS?: Partial<Weights>;
  COLORS?: Partial<Colors>;
}

export interface CustomTheme extends DefaultTheme {}

export interface RGBA<T> {
  r: T;
  g: T;
  b: T;
  a: T;
}
