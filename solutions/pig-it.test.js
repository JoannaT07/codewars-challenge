const pigIt = (str) => {
  return str
    .split(" ")
    .map((n) => n.match("[A-Za-z]") ? n.replace(n[0], "") + n[0] + "ay" : n)
    .join(" ");
};

test.each([
  ['This is my string','hisTay siay ymay tringsay'],
  ['Pig latin is cool', 'igPay atinlay siay oolcay'],
])(
  "Should move the first letter of each word to the end add 'ay' [ str: %p expected: %p]",
  (str, expected) => {
    //expect
    expect(pigIt(str)).toEqual(expected);
  }
);
