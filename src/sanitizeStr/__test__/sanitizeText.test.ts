import { sanitizeStr } from "..";

describe("sanitizeStr", () => {
  it("should remove spaces by default", () => {
    const str = "  hello  my  friend!   ";
    const result = sanitizeStr(str);
    expect(result).toBe("hello my friend!");
  });

  it("should remove accents if specified in the config", () => {
    const str = "  HéllO  my  friend!   ";
    const config = { removeAccents: true };
    const result = sanitizeStr(str, config);
    expect(result).toBe("HellO my friend!");
  });

  it("should convert to uppercase if specified in the config", () => {
    const str = "  hello  my  friend!   ";
    const config = { toUpperCase: true };
    const result = sanitizeStr(str, config);
    expect(result).toBe("HELLO MY FRIEND!");
  });

  it("should handle all config options", () => {
    const str = "  HéllO  my  friend!   ";
    const config = { removeAccents: true, toUpperCase: true };
    const result = sanitizeStr(str, config);
    expect(result).toBe("HELLO MY FRIEND!");
  });
});
