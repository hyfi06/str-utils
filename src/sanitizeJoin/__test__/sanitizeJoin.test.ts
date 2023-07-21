import { sanitizeJoin } from "..";

describe("sanitizeJoin", () => {
  it("should join an array into a string, ignoring falsy values and removing extra spaces", () => {
    const array = ["hello", "", "my", null, "friend!", "  "];
    const separator = " ";
    const result = sanitizeJoin(array, separator);
    expect(result).toBe("hello my friend!");
  });

  it("should handle arrays with no falsy values", () => {
    const array = ["hello", "my", "friend!"];
    const separator = " ";
    const result = sanitizeJoin(array, separator);
    expect(result).toBe("hello my friend!");
  });

  it("should handle empty arrays", () => {
    const array: any[] = [];
    const separator = " ";
    const result = sanitizeJoin(array, separator);
    expect(result).toBe("");
  });

  it("should handle arrays with only falsy values", () => {
    const array = ["", null, undefined, 0, NaN, false];
    const separator = " ";
    const result = sanitizeJoin(array, separator);
    expect(result).toBe("");
  });
});
