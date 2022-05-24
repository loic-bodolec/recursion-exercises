import sumNumbersRecursive from "./sumNumbersRecursive";

describe("sumNumbers", () => {
  it("gives 15 for n = 5", () => {
    expect(sumNumbersRecursive(5)).toBe(15);
  });
  it("gives 28 for n = 7", () => {
    expect(sumNumbersRecursive(7)).toBe(28);
  });
});
