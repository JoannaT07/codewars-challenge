const spinWords = (string) => {
  return string
    .split(" ")
    .map((e) => (e.length >= 5 ? e.split("").reverse().join("") : e))
    .join(" ");
};

test.each([
  ["Hey fellow warriors", "Hey wollef sroirraw"],
  ["This is a test", "This is a test"],
  ["This is another test", "This is rehtona test"]
])(
  "Should return all five or more letter words reversed [ string: %p expected: %p]",
  (string, expected) => {
    //expect
    expect(spinWords(string)).toEqual(expected);
  }
);

