const { countWellFormedParentheses } = require("./index");

test("Catalan(0) = 1", () => {
  expect(countWellFormedParentheses(0)).toBe("1");
});

test("Catalan(2) = 1", () => {
  expect(countWellFormedParentheses(2)).toBe("1");
});

test("Invalid input throws", () => {
  expect(() => countWellFormedParentheses(-1)).toThrow();
});
