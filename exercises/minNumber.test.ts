import minNumber from "./minNumber";

describe("minNumber", () => {
  it("returns 5 for [11, 5, 19]", () => {
    expect(minNumber([11, 5, 19])).toBe(5);
  });
  it("returns -17 for [1, -5, -17, -12]", () => {
    expect(minNumber([1, -5, -17, -12])).toBe(-17);
  });
});
