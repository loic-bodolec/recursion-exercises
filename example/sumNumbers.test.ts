import sumNumbers from "./sumNumbers";

describe("sumNumbers", () => {
  it("gives 15 for n = 5", () => {
    expect(sumNumbers(5)).toBe(15);
  });
  it("gives 28 for n = 7", () => {
    expect(sumNumbers(7)).toBe(28);
  });
});
