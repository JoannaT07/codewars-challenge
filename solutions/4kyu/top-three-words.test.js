const topThreeWords = (text) => {
  let count = {};
  text.toLowerCase()
    .split(" ")
    .map((e) => e.match(/[a-zA-Z]+'?[a-zA-Z]*/g, ""))
    .filter((e) => e)
    .sort()
    .forEach((e) => {
      count[e] = ++count[e] || 1;
    });
  return Object.keys(count)
    .sort((a, b) => count[b] - count[a])
    .splice(0, 3);
};

test.each([
  ["e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e", ['e', 'ddd', 'aa']],
  ["  //wont won't won't ", ["won't", "wont"]],
  [" ... ", []],
  ["  , e   .. ", ["e"]],
  [" ' ", []]
])(
  "Should return an array of the top-3 most occurring words [ text: %p expected: %p]",
  (text, expected) => {
    //expect
    expect(topThreeWords(text)).toEqual(expected);
  }
);

