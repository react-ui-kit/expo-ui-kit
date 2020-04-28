import { getMargins, getPaddings } from "../utils/";

describe("Helpers", () => {
  it("spacing: margin & padding", () => {
    const margin = getMargins({ margin: true, defaultValue: 8 });
    const padding = getPaddings({ padding: true, defaultValue: 8 });
    expect(margin).toEqual({
      marginBottom: 8,
      marginLeft: 8,
      marginRight: 8,
      marginTop: 8
    });
    expect(padding).toEqual({
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8
    });
  });
  it("spacing: margin={4} && padding={4}", () => {
    const margin = getMargins({ margin: 4 });
    const padding = getPaddings({ padding: 4 });
    expect(margin).toEqual({
      marginBottom: 4,
      marginLeft: 4,
      marginRight: 4,
      marginTop: 4
    });
    expect(padding).toEqual({
      paddingBottom: 4,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 4
    });
  });
  it("spacing: margin='0.5x' && padding='0.4x'", () => {
    const margin = getMargins({ margin: "0.5x", defaultValue: 4 });
    const padding = getPaddings({ padding: "4x", defaultValue: 4 });
    expect(margin).toEqual({
      marginBottom: 2,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 2
    });
    expect(padding).toEqual({
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16
    });
  });
});
