const toCamelCase = (str) => {
  const arrOfSplitStr = str.replace(/[-_]/g, " ").split(" ");
  const restOfString = arrOfSplitStr
    .splice(1)
    .map((str) => str.replace(str[0], str[0].toUpperCase()))
    .join("");
  return arrOfSplitStr[0] + restOfString;
};

test.each([
  ["the-stealth-warrior", "theStealthWarrior"],
  ["the_stealth-warrior", "theStealthWarrior"]
])(
  "Should converts dash/underscore delimited words into camel casing [ str: %p dexpected: %p]",
  (str, expected) => {
    //expect
    expect(toCamelCase(str)).toEqual(expected);
  }
);

