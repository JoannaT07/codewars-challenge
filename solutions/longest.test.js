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
  "Find %p of times that must multiply the digits in %p",
  (s1, s2, expected) => {
    //expect
    expect(longest(s1, s2)).toEqual(expected);
  }
);
