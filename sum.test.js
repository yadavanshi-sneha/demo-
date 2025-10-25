import sum from "./sum.js";

describe("test for sum fnx",() => {
  test("adds 2+5 to equal to 7", () => {
     expect(sum(2,5)).toBe(7);
});

 test("adds -2 + -8 to equal to -10", () => {
     expect(sum(-2,-8)).toBe(-10);
});

 test("adds -2+ -5 to equal to -7", () => {
     expect(sum(-2,-5)).toBe(-7);
});
})
