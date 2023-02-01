const generateHashtag = (str) => {
  const generateStr = str
    .split(" ")
    .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
    .join("");
  return generateStr.length > 0 && generateStr.length < 140 && `#${generateStr}`;
};

test.each([
  ["", false],
  [" ".repeat(200), false],
  ["Do We have A Hashtag", "#DoWeHaveAHashtag"],
  ["Codewars is nice", "#CodewarsIsNice"],
])(
  "Should generate string to hashtag [ str: %p expected: %p]",
  (str, expected) => {
    //expect
    expect(generateHashtag(str)).toEqual(expected);
  }
);
