const count = (string) => {
  const count = {};
  string.split("").forEach((l) => {
    count[l] = ++count[l] || 1;
  });
  return count;
};

test.each([
  ["abaccccccda", {a: 3, b: 1, c: 6, d: 1}],
  ["aba", {a: 2, b: 1}],
  ["", {}]
])(
  "Should count all the occurring characters in a string [ string: %p expected: %p]",
  (string, expected) => {
    //expect
    expect(count(string)).toEqual(expected);
  }
);

