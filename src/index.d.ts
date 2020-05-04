import React from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TouchableHighlightProps,
  TouchableNativeFeedbackProps,
  TouchableWithoutFeedbackProps
} from "react-native";

/**
 * Global Component Types
 */

interface SizingProps {
  width?: number | string;
  height?: number | string;
  borderWidth?: number;
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
  borderColor?: string;
}

interface PositioningProps {
  flex?: number | boolean;
  noflex?: boolean;
  space?: "between" | "around" | "evenly";
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
  theme?: Record<string, any>;
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

type Subtract<T, K> = Pick<T, Exclude<keyof T, keyof K>>;
export type ExtraProps<P> = Subtract<P, ExcludedProps>;
interface BlockOptions {
  animated?: boolean;
  safe?: boolean;
  card?: boolean;
  scroll?: boolean;
}

interface ButtonOptions {
  outlined?: boolean;
  highlight?: boolean;
  nativeFeedback?: boolean;
  withoutFeedback?: boolean;
}

interface TextOptions {
  animated?: boolean;
  weight?: string | boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  title?: boolean;
  subtitle?: boolean;
  caption?: boolean;
  small?: boolean;
  size?: number;
  // styling
  transform?: string;
  regular?: boolean;
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
  light?: boolean;
  center?: boolean;
  right?: boolean;
  spacing?: string; // letter-spacing
}

interface CardOptions {
  outlined?: boolean;
  disabled?: boolean;
}
interface InputOptions {
  pattern?: string | string[];
  autoCorrect?: any;
  autoCapitalize?: any;
  placeholder?: string;
  internalRef?: any;
  type?: string;
  onChangeText?(e: InputState);
  onFocus?(e: NativeSyntheticEvent<TextInputFocusEventData>);
  onBlur?(e: NativeSyntheticEvent<TextInputFocusEventData>);
  onValidation?(e: boolean | boolean[]);
}

export type InputState = {
  value?: any;
  focused?: boolean;
  blurred?: boolean;
};
export type InputAction = {
  type?: string;
  payload?: InputState;
};

/**
 * Props
 */

export interface BlockProps extends BlockOptions, ThemeProps {
  [key: string]: any;
}

export interface ButtonProps extends ButtonOptions, ThemeProps {
  [key: string]: any;
}

export type ButtonInstanceProps = ButtonProps &
  TouchableWithoutFeedbackProps &
  TouchableHighlightProps &
  TouchableNativeFeedbackProps & {
    Touchable?: any;
  };
export interface TextProps extends TextOptions, ThemeProps {
  [key: string]: any;
}

export interface CardProps extends CardOptions, ThemeProps {
  [key: string]: any;
}

export interface InputProps extends InputOptions, ThemeProps {}

export declare const Block: React.FC<BlockProps>;
export declare const styles: {
  block: {
    flex: number;
  };
  row: {
    flexDirection: "row";
  };
  column: {
    flexDirection: "column";
  };
  center: {
    alignItems: "center";
  };
  middle: {
    justifyContent: "center";
  };
  left: {
    justifyContent: "flex-start";
  };
  right: {
    justifyContent: "flex-end";
  };
  top: {
    justifyContent: "flex-start";
  };
  bottom: {
    justifyContent: "flex-end";
  };
  wrap: {
    flexWrap: "wrap";
  };
};
export declare const ButtonInstance: ({
  Touchable,
  children,
  ...props
}: ButtonInstanceProps) => JSX.Element;
export declare const Button: React.FC<
  ButtonProps & TouchableWithoutFeedbackProps & TouchableNativeFeedbackProps
>;

export declare const Card: React.FC<CardProps>;

export declare const INITIAL_STATE: InputState;
export declare const change: (
  value: any
) => {
  type: string;
  payload: {
    value: any;
  };
};
export declare const focus: () => {
  type: string;
};
export declare const blur: () => {
  type: string;
};
export declare const reducer: (
  state: InputState,
  action: InputAction
) => InputState;
export declare const Input: React.FC<InputProps>;

export declare const Text: React.FC<TextProps>;
