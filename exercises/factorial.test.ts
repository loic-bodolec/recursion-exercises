import factorial from "./factorial";

describe("factorial", () => {
  it("returns 24 for n = 4", () => {
    expect(factorial(4)).toBe(24);
  });
  it("returns 720 for n = 6", () => {
    expect(factorial(6)).toBe(720);
  });
});
