const longest = (s1, s2) => {
  return s1
    .concat(s2)
    .split("")
    .filter((value, i, arr) => i === arr.findIndex((el) => el === value))
    .sort()
    .join('')
};

test.each([
  ["xyaabbbccccdefww", "xxxxyyyyabklmopq", "abcdefklmopqwxy"],
  [
    "abcdefghijklmnopqrstuvwxyz",
    "abcdefghijklmnopqrstuvwxyz",
    "abcdefghijklmnopqrstuvwxyz",
  ],
])(
  "Should return the longest possible string, containing distinct letters [ s1: p%, s2: %p expected: %p]",
  (s1, s2, expected) => {
    //expect
    expect(longest(s1, s2)).toEqual(expected);
  }
);
