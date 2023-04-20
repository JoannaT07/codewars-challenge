const order = (words) => {
  let sorted = [];
  words.split(" ").map((word) => {
    for (let i = 0; i <= words.length; i++) {
      if (word.includes(i + 1)) {
        sorted[i] = word;
      }
    }
  });
  return sorted.join(" ");
};

test.each([
  ["4of Fo1r pe6ople g3ood th5e the2", "Fo1r the2 g3ood 4of th5e pe6ople"],
  ["is2 Thi1s T4est 3a", "Thi1s is2 3a T4est"]
])(
  "Should puts the words in order [ words: %p expected: %p]",
  (words, expected) => {
    //expect
    expect(order(words)).toEqual(expected);
  }
);

