const lastDigit = (str1, str2) => {
  if (str2 == 0) return 1;
  const base = Number(str1.slice(-1));
  const remainder = Number(str2.slice(-2)) % 4;
  const exponent = remainder == 0 ? 4 : remainder;

  return Number(Math.pow(base, exponent).toString().slice(-1));
};

test.each([
  ["10", "10000000000", 0],
  ["4", "2", 6],
  ["9", "7", 9],
  [
    "1606938044258990275541962092341162602522202993782792835301376",
    "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376",
    6
  ],
  ["9", "0", 1],
])(
  "Should eturns the last digit of a to the power of b [ str1: p%, str2: %p expected: %p]",
  (str1, str2, expected) => {
    //expect
    expect(lastDigit(str1, str2)).toEqual(expected);
  }
);
