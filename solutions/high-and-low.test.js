const highAndLow = (numbers) => {
  const numbers = numbers.split(" ").map(n => Number(n))
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
};

test.each([
  ["8 3 -5 42 -1 0 0 -9 4 7 4 -4", "42 -9"],
  ["1 2 3", "3 1"],
])(
  "Should return the highest and lowest number [ numbers: %p expected: %p]",
  (numbers, expected) => {
    //expect
    expect(highAndLow(numbers)).toEqual(expected);
  }
);
