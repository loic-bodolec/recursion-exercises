import palindrome from "./palindrome";

describe("palindrome", () => {
  it("returns true for abba", () => {
    expect(palindrome("abba")).toBe(true);
  });
  it("returns true for level", () => {
    expect(palindrome("level")).toBe(true);
  });
  it("returns false for liver", () => {
    expect(palindrome("liver")).toBe(false);
  });
});
