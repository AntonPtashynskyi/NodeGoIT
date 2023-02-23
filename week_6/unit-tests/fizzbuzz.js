const fizzbuzz = (number) => {
  if (number < 0) {
    throw new Error("Number should be >= 0");
  }
  if (typeof number !== "number") {
    throw new Error(`Number should be a number, but was ${typeof number}`);
  }

  const result = [];
  for (let i = 1; i <= number; i += 1) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
      console.log("Buzz");
    } else {
      result.push("" + i);
      console.log("" + 1);
    }
  }
  return result;
};

module.exports = fizzbuzz;
