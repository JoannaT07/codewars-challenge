const countBits = (n) => {
  return [...n.toString(2)].reduce((a, b) => Number(a) + Number(b), 0);
};

test.each([
  [0, 0],
  [4, 1],
  [7, 3],
  [9, 2],
  [10, 2]
])(
  "Should remove all values from list a, which are present in list b [ n: %p expected: %p]",
  (n, expected) => {
    //expect
    expect(countBits(n)).toEqual(expected);
  }
);

