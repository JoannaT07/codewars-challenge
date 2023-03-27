const firstNonRepeatingLetter = (s) => {
  const countedLetters = [...s].map(e => e.toLowerCase()).reduce((a, c) => {
    const count = a[c] ?? 0;
    return {
      ...a,
      [c]: count + 1,
    };
  }, {});
  const foundedLetter = Object.keys(countedLetters).find((e) => countedLetters[e] === 1);
  return foundedLetter !== undefined ? [...s].find(e => e.toLowerCase() === foundedLetter) : ""
};

test.each([
  ["stress", "t"],
  ["aabbccddeeffgghh", ""],
  ["a", "a"],
  ["moonmen", "e"],
  ["sTreSS", "T"]
])("Should return first not repeated letter [s: %p expected: %p]", (s, expected) =>
  expect(firstNonRepeatingLetter(s)).toEqual(expected)
);
