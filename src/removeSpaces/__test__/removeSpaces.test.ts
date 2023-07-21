import { removeSpaces } from "..";

describe("removeSpaces", () => {
  it("should remove leading, trailing, and duplicate spaces", () => {
    const str = "  hello  my  friend!   ";
    const result = removeSpaces(str);
    expect(result).toBe("hello my friend!");
  });

  it("should handle strings with no spaces", () => {
    const str = "hello";
    const result = removeSpaces(str);
    expect(result).toBe(str);
  });

  it("should handle empty strings", () => {
    const str = "";
    const result = removeSpaces(str);
    expect(result).toBe(str);
  });

  it("should handle strings with only spaces", () => {
    const str = "     ";
    const result = removeSpaces(str);
    expect(result).toBe("");
  });
});
