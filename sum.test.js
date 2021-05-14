const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum.sum(1, 2)).toBe(3);
});

test("adds 1 + 2 + 3 to equal 6", () => {
  expect(sum.sume(1, 2, 3)).toBe(6);
});
