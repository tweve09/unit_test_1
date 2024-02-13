const index = require("../index");

describe("My Addition function", () => {
  it("should return NaN when number and Nan are provided", () => {
    const result = index.add(1, "a");
    expect(result).toBe(NaN);
  });

  it("Should return 3 when 1 and 2 are provided", () => {
    const result = index.add(1, 2);
    expect(result).toBe(3);
  });
});

describe("Fizz Buzz", () => {
  it("Should throw an error when input is not a number", () => {
    const args = ["a", true, null, " ", undefined];

    args.forEach((argument) => {
      expect(() => index.fizzBuzz(argument)).toThrow();
    });
  });

  it("Should return FizzBuzz when 15 provided", () => {
    const result = index.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("Should return Fizz when 3 provided", () => {
    const result = index.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  it("Should retun Buzz when 5 provided", () => {
    const result = index.fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

  it("Should return 1 when 1 provided", () => {
    const result = index.fizzBuzz(1);
    expect(result).toBe(1);
  });
});
