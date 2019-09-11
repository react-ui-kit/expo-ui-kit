/**
 * Generate stylesheets for margin or padding
 * type: string - margin or padding
 * value: boolean (true), number, array or string ("2x", "0.5x")
 * defaultValue: integer
 *
 * Usage:
 * const marginSpacing = spacing("margin", true);
 * const paddingSpacing = spacing("padding", true, 10);
 * const marginSpacing = spacing("margin", 6);
 * const marginSpacing = spacing("margin", [4]); // vertical & horizontal => 4
 * const marginSpacing = spacing("margin", [4, 8]); // vertical => 4, horizontal => 8
 * const marginSpacing = spacing("margin", [4, 8, 2]); // top => 4, right & left => 8, bottom => 2
 * const marginSpacing = spacing("margin", [4, 8, 2, 6]); // top => 4, right => 8, bottom => 2, left => 6
 * const marginSpacing = spacing("margin", "2x", 10); // multiply 2 * 10 => margin 20
 * const marginSpacing = spacing("margin", "0.5x", 12); // multiply 0.5 * 10 => margin 6
 */

export const spacing = (type, value, defaultValue = 1) => {
  // accept only 2 types: margin & padding
  const accepted = ["margin", "padding"];
  if (accepted.indexOf(type) === -1) return {};

  // if the value is boolean return defaultValue
  if (typeof value === "boolean") {
    return {
      [`${type}Top`]: defaultValue, // marginTop or paddingTop
      [`${type}Right`]: defaultValue, // marginRight or paddingRight
      [`${type}Bottom`]: defaultValue, // marginBottom or paddingBottom
      [`${type}Left`]: defaultValue // marginLeft or paddingLeft
    };
  }

  // if the value is integer/number
  if (typeof value === "number") {
    return {
      [`${type}Top`]: value, // marginTop or paddingTop
      [`${type}Right`]: value, // marginRight or paddingRight
      [`${type}Bottom`]: value, // marginBottom or paddingBottom
      [`${type}Left`]: value // marginLeft or paddingLeft
    };
  }

  // parse array of values [1, 2, 3, 4]
  if (typeof value === "object") {
    const size = Object.keys(value).length;
    switch (size) {
      case 1: // [4] generate same value for all spacings
        return {
          [`${type}Top`]: value[0],
          [`${type}Right`]: value[0],
          [`${type}Bottom`]: value[0],
          [`${type}Left`]: value[0]
        };
      case 2: // [4, 6] generate vertical (4) and horizontal (6) spacing
        return {
          [`${type}Top`]: value[0],
          [`${type}Right`]: value[1],
          [`${type}Bottom`]: value[0],
          [`${type}Left`]: value[1]
        };
      case 3: // [4, 6, 8] generate top (4), right & left (6), bottom (8) spacing
        return {
          [`${type}Top`]: value[0],
          [`${type}Right`]: value[1],
          [`${type}Bottom`]: value[2],
          [`${type}Left`]: value[1]
        };
      default:
        // [4, 6, 8, 10] generate top (4), right (6), bottom (8), left (10) spacing
        return {
          [`${type}Top`]: value[0],
          [`${type}Right`]: value[1],
          [`${type}Bottom`]: value[2],
          [`${type}Left`]: value[3]
        };
    }
  }

  // if the value is string: 2x 4x
  if (typeof value === "string") {
    // extract decimal or integer value from value
    const spacingValue = value.match(/((?=.*[1-9])\d*(?:\.\d{1,2})|(\d*))x/);
    if (!spacingValue) return {};

    return {
      [`${type}Top`]: parseFloat(spacingValue) * defaultValue,
      [`${type}Right`]: parseFloat(spacingValue) * defaultValue,
      [`${type}Bottom`]: parseFloat(spacingValue) * defaultValue,
      [`${type}Left`]: parseFloat(spacingValue) * defaultValue
    };
  }
};

export const getMargins = (value, defaultValue = 1) => {
  if (typeof value === "number") {
    return {
      marginTop: value,
      marginRight: value,
      marginBottom: value,
      marginLeft: value
    };
  }

  if (typeof value === "object") {
    const marginSize = Object.keys(value).length;
    switch (marginSize) {
      case 1:
        return {
          marginTop: value[0],
          marginRight: value[0],
          marginBottom: value[0],
          marginLeft: value[0]
        };
      case 2:
        return {
          marginTop: value[0],
          marginRight: value[1],
          marginBottom: value[0],
          marginLeft: value[1]
        };
      case 3:
        return {
          marginTop: value[0],
          marginRight: value[1],
          marginBottom: value[2],
          marginLeft: value[1]
        };
      default:
        return {
          marginTop: value[0],
          marginRight: value[1],
          marginBottom: value[2],
          marginLeft: value[3]
        };
    }
  }

  if (typeof value === "string") {
    const marginValue = value.match(/((?=.*[1-9])\d*(?:\.\d{1,2})|(\d*))x/);
    return (
      marginValue && {
        marginTop: parseFloat(marginValue) * defaultValue,
        marginRight: parseFloat(marginValue) * defaultValue,
        marginBottom: parseFloat(marginValue) * defaultValue,
        marginLeft: parseFloat(marginValue) * defaultValue
      }
    );
  }
};

export const getPaddings = (value, defaultValue = 1) => {
  if (typeof value === "number") {
    return {
      paddingTop: value,
      paddingRight: value,
      paddingBottom: value,
      paddingLeft: value
    };
  }

  if (typeof value === "object") {
    const paddingSize = Object.keys(value).length;
    switch (paddingSize) {
      case 1:
        return {
          paddingTop: value[0],
          paddingRight: value[0],
          paddingBottom: value[0],
          paddingLeft: value[0]
        };
      case 2:
        return {
          paddingTop: value[0],
          paddingRight: value[1],
          paddingBottom: value[0],
          paddingLeft: value[1]
        };
      case 3:
        return {
          paddingTop: value[0],
          paddingRight: value[1],
          paddingBottom: value[2],
          paddingLeft: value[1]
        };
      default:
        return {
          paddingTop: value[0],
          paddingRight: value[1],
          paddingBottom: value[2],
          paddingLeft: value[3]
        };
    }
  }

  if (typeof value === "string") {
    const paddingValue = value.match(/((?=.*[1-9])\d*(?:\.\d{1,2})|(\d*))x/);
    return (
      paddingValue && {
        paddingTop: parseFloat(paddingValue) * defaultValue,
        paddingRight: parseFloat(paddingValue) * defaultValue,
        paddingBottom: parseFloat(paddingValue) * defaultValue,
        paddingLeft: parseFloat(paddingValue) * defaultValue
      }
    );
  }
};

/**
 * Merge 2 theme with a default theme and extra theme
 * to rewrite the default values with new values
 * using ES6 spread operator
 * Theme accepted data structure format:
 * const theme1 = {
 *   COLORS: {
 *     primary: "red",
 *     secondary: "green",
 *     // see theme.js
 *   },
 *   SIZES: {
 *     // see theme.js
 *   },
 *   FONTS: {
 *     // see theme.js
 *   },
 *   WEIGHTS: {
 *     // see theme.js
 *   }
 * }
 *
 * const theme2 = {
 *   COLORS: {
 *     primary: "blue",
 *   }
 * }
 *
 * Usage
 * const appTheme = mergeTheme(theme1, theme2);
 * const { COLORS } = appTheme;
 * COLORS.primary will return value "blue"
 * COLORS.secondary will return value "green"
 */

export const mergeTheme = (theme = {}, extra = {}) => {
  const { COLORS, SIZES, FONTS, WEIGHTS, ...REST } = extra;
  return {
    COLORS: { ...theme.COLORS, ...COLORS },
    SIZES: { ...theme.SIZES, ...SIZES },
    FONTS: { ...theme.FONTS, ...FONTS },
    WEIGHTS: { ...theme.WEIGHTS, ...WEIGHTS },
    ...REST
  };
};
