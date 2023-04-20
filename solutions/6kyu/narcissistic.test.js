const narcissistic = (number) => {
  const arrOfDigits = [...number.toString()];
  const sumOfExpDigits = arrOfDigits.reduce(
    (a, b) => a + b ** arrOfDigits.length,
    0
  );
  return number === sumOfExpDigits;
};

test.each([
  [153, true],
  [7, true],
  [122, false],
  [1652, false]
])(
  "Should return true or false depending on whether the number is Narcissistic [ number: %p expected: %p]",
  (number, expected) => {
    //expect
    expect(narcissistic(number)).toEqual(expected);
  }
);

