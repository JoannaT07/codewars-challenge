const comp = (array1, array2) => {
  if (array1 !== null && array2 !== null) {
    const sort = (arr) => arr.sort((a, b) => a - b);
    return sort(array1).every((e, i) => e * e === sort(array2)[i]);
  }
  return false;
};

test.each([
  [
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361],
    true,
  ],
  [
    [123, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361],
    false,
  ]
])(
  "Should check that the elements in array2 are elements in array1 squared [array1: %p array2: %p expected: %p]",
  (array1, array2, expected) => expect(comp(array1, array2)).toEqual(expected)
);
