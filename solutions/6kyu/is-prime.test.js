const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

test.each([
  [1, false],
  [2, true],
  [5, true],
  [-1, false],
  [73, true],
  [75, false]
])("Should check if num is prime [num: %p expected: %p]", (num, expected) =>
  expect(isPrime(num)).toEqual(expected)
);
