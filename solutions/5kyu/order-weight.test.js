const orderWeight = (string) => {
  return string
    .split(" ")
    .sort()
    .map((n) => ({
      number: n,
      weight: [...n].map((e) => parseInt(e)).reduce((a, b) => a + b, 0),
    }))
    .sort((a, b) => (a.weight - b.weight))
    .map((e) => e.number)
    .join(" ");
};

test.each([
  ["103 123 4444 99 2000", "2000 103 123 4444 99"],
  ["56 65 74 100 99 68 86 180 90", "100 180 90 56 65 74 68 86 99"],
  ["2000 11 11 10003 22 123 1234000 44444…", "11 11 2000 10003 22 123 1234000 44444…"]
])(
  "Should return string ordered by weights [ string: %p expected: %p]",
  (string, expected) => {
    //expect
    expect(orderWeight(string)).toEqual(expected);
  }
);

