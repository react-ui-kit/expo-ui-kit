import { getSpacing } from "../utils/index";

describe("Helpers", () => {
  it("spacing: margin & padding", () => {
    const margin = getSpacing("margin", true, 8);
    const padding = getSpacing("padding", true, 8);
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
    const margin = getSpacing("margin", 4);
    const padding = getSpacing("padding", 4);
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
    const margin = getSpacing("margin", "0.5x", 4);
    const padding = getSpacing("padding", "4x", 4);
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
