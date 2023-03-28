const squareDigits = (num) => {
  return Number([...num.toString()].map((n) => n * n).join(""));
};

test.each([
  [3212, 9414],
  [2112, 4114],
  [9119, 811181]
])(
  "Should return square every digit of a number [num: p% expected: p%]",
  (num, expected) => expect(squareDigits(num)).toEqual(expected)
);
