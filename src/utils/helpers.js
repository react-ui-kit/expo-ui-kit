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
