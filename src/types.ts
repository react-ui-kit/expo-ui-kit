/**
 * Component Types
 */

import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { ThemeProps } from "./global";

interface BlockOptions {
  animated?: boolean;
  safe?: boolean;
  card?: boolean;
  scroll?: boolean;
}

interface ButtonOptions {
  disabled?: boolean;
  activeOpacity?: number;
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

export interface TextProps extends TextOptions, ThemeProps {
  [key: string]: any;
}

export interface CardProps extends CardOptions, ThemeProps {
  [key: string]: any;
}

export interface InputProps extends InputOptions, ThemeProps {}
