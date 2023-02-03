const arrayDiff = (a, b) => {
  return a.filter(n => !b.includes(n))
};

test.each([
  [[1,2], [1], [2]],
  [[1,2,2], [2], [1]],
  [[1,2,2], [], [1,2,2]]
])(
  "Should remove all values from list a, which are present in list b [ a: %p b: %p expected: %p]",
  (a, b, expected) => {
    //expect
    expect(arrayDiff(a, b)).toEqual(expected);
  }
);

