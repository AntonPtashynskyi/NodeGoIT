const fizzbuzz = require("./fizzbuzz");

describe("FizzBuzz", () => {
  test("Should throw Error if args is <= 0", () => {
    expect(() => fizzbuzz(-1)).toThrow("Number should be >= 0");
  });
  test("Passed argument should be a type of number", () => {
    expect(() => fizzbuzz("one")).toThrow("Number should be a number");
    expect(() => fizzbuzz({})).toThrow("Number should be a number");
    expect(() => fizzbuzz([1, 2])).toThrow("Number should be a number");
    expect(() => fizzbuzz(false)).toThrow("Number should be a number");
  });
  test("Should work properly with numbers", () => {
    const result = fizzbuzz(16);
    console.log(result);
    expect(result).toStrictEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
      "16",
    ]);
  });
});
