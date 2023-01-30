const persistence = (num) => {
  let str = num.toString();
  let count = 0;
  while (str.length > 1) {
    str = str
      .split("")
      .reduce((acc, value) => acc * value)
      .toString();
    count++;
  }
  return count;
};

const persistence2 = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
    : 0;
};

test.each([
  [39, 3],
  [999, 4],
])("Find %p of times that must multiply the digits in %p", (num, expected) => {
  //expect
  expect(persistence(num)).toEqual(expected);
});
