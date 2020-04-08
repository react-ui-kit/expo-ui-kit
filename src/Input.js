import React, { useReducer } from "react";
import { StyleSheet, TextInput } from "react-native";

import expoTheme from "./theme";
import { mergeTheme, rgba } from "./utils";

/**
 * https://facebook.github.io/react-native/docs/textinput
 *
 * Validation
 * onValidation return a single boolean or object with boolean values
 * pattern using regex string for validating the value
 *
 * single pattern to validate the value
 * <Input
 *   pattern="/\d/" // validate digits
 *   onValidation={isValid => console.log(isValid)}
 * />
 *
 * multiple pattern to validate the value
 * <Input
 *   pattern={[ "/\d/", "/\w/"]} // validate digits and words
 *   onValidation={isValid => console.log(isValid)}
 * />
 *
 * Border color using color prop
 * <Input color="red" />
 *
 * Pass ref from props using internalRef reference
 * <Input internalRef={c => this.c} />
 */

export const INITIAL_STATE = {
  value: null,
  focused: false,
  blurred: false
};

export const change = (value) => {
  return { type: "change", payload: { value } };
};
export const focus = () => {
  return { type: "focus" };
};
export const blur = () => {
  return { type: "blur" };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { ...state, value: action.payload.value };
    case "focus":
      return { ...state, focused: true, blurred: false };
    case "blur":
      return { ...state, focused: false, blurred: true };
    default:
      return state;
  }
};

const Input = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleValidation = (value) => {
    const { pattern } = props;
    if (!pattern) return true;

    // string pattern, one validation rule
    if (typeof pattern === "string") {
      const condition = new RegExp(pattern, "g");
      return condition.test(value);
    }

    // array patterns, multiple validation rules
    if (typeof pattern === "object") {
      const conditions = pattern.map((rule) => new RegExp(rule, "g"));
      return conditions.map((condition) => condition.test(value));
    }
  };

  const handleChange = (value) => {
    const { onChangeText, onValidation } = props;
    const isValid = handleValidation(value);
    dispatch(change(value));
    onValidation && onValidation(isValid);
    onChangeText && onChangeText(value);
  };

  const handleFocus = (event) => {
    const { onFocus } = props;
    dispatch(focus());
    onFocus && onFocus(event);
  };

  const handleBlur = (event) => {
    const { onBlur } = props;
    dispatch(blur());
    onBlur && onBlur(event);
  };

  const handleTextType = (type) => {
    return type === "email"
      ? "emailAddress"
      : type === "phone"
      ? "telephoneNumber"
      : type;
  };

  const {
    autoCorrect,
    autoCapitalize,
    placeholder,
    children,
    color,
    borderWidth,
    borderColor,
    type,
    style,
    theme,
    internalRef,
    onFocus,
    onBlur,
    onChangeText,
    ...rest
  } = props;
  const { SIZES, COLORS } = mergeTheme({ ...expoTheme }, theme);

  const textStyles = StyleSheet.flatten([
    {
      borderWidth: 1,
      height: SIZES.base * 5.5,
      borderRadius: SIZES.radius,
      borderColor: rgba(color || COLORS.primary, 0.4),
      paddingHorizontal: SIZES.base,
      fontSize: SIZES.font
    },
    borderWidth && { borderWidth },
    borderColor && { borderColor },
    style
  ]);
  const textType = handleTextType(type);

  const internalProps = {
    style: textStyles,
    autoCorrect,
    autoCapitalize,
    placeholder,
    textContentType: textType,
    value: state.value,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChangeText: handleChange
  };

  return (
    <TextInput
      ref={internalRef}
      {...props}
      {...internalProps}
      testID="text-input">
      {children}
    </TextInput>
  );
};

Input.defaultProps = {
  pattern: null,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onValidation: null,
  placeholder: null,
  autoCorrect: false,
  autoCapitalize: "none",
  color: null,
  internalRef: null,
  theme: {},
  style: {}
};

export default Input;
