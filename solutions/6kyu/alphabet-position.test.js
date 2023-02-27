const alphabetPosition = (string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const numbers = [];
  string
    .split("")
    .forEach((e) =>
      [...alphabet].map(
        (letter, i) => letter === e.toLowerCase() && numbers.push(i + 1)
      )
    );
  return numbers.join(" ");
};

test.each([
  ["The sunset sets at twelve o' clock.", "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ],
  ["The narwhal bacons at midnight.", "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"]
])(
  "Should replace every letter with its position in the alphabet [ string: %p expected: %p]",
  (string, expected) => {
    //expect
    expect(alphabetPosition(string)).toEqual(expected);
  }
);

