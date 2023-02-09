const incrementString = (string) => {
  const numbers = string.match(/\d*$/);
  if (numbers == null) {
    return string + 1;
  } else {
    const incrementNumber = Number(numbers[0]) + 1;
    const numberLength = incrementNumber.toString().length;
    if (numbers[0].split("").every((n) => n === "9")) {
      return string.slice(0, string.length - numberLength + 1) + incrementNumber;
    }
    return string.slice(0, string.length - numberLength) + incrementNumber;
  }
};

test.each([
  ["foobar000", "foobar001"],
  ["foobar999", "foobar1000"],
  ["foobar00999", "foobar01000"],
  ["foo", "foo1"]
])(
  "Should increments a string [ string: %p expected: %p]",
  (string, expected) => {
    //expect
    expect(incrementString(string)).toEqual(expected);
  }
);

