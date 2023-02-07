const splitString = (string) => {
  if (string.length % 2 !== 0) {
    string = string + "_";
  }
  return string.match(/.{2}/g) || [];
};

test.each([
  ["abcdef", ["ab", "cd", "ef"]],
  ["abcdefg", ["ab", "cd", "ef", "g_"]],
  ["", []]
])(
  "Should split the string into pairs of two characters [ string: %p dexpected: %p]",
  (url, expected) => {
    //expect
    expect(splitString(url)).toEqual(expected);
  }
);

