const factorial = (n) => {
  return n == 1 ? 1 : BigInt(n * factorial(n - 1)).toString();
};

test.each([
  [5, "120"],
  [9, "362880"],
  [50, "30414093201713375576366966406747986832057064836514787179557289984"]
])(
  "Should return factorial [ n: %p expected: %p]",
  (n, expected) => {
    //expect
    expect(factorial(n)).toEqual(expected);
  }
);

