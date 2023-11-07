const { sum, subtract } = require("../src/math");

test("add function returns 3 if arguments are 1 and 2", async () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtract function returns 1 if arguments are 2 and 1", async () => {
  expect(subtract(2, 1)).toBe(1);
});
