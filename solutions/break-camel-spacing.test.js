const breakCamelCasing = (string) => {
  return [...string].map(n => n === n.toUpperCase() ? " " + n : n).join("")
};

test.each([
  ['camelCasing', 'camel Casing'],
  ['camelCasingTest', 'camel Casing Test'],
  ["identifier", "identifier"]
])(
  "Should break up camel casing [ string: %p dexpected: %p]",
  (url, expected) => {
    //expect
    expect(breakCamelCasing(url)).toEqual(expected);
  }
);

