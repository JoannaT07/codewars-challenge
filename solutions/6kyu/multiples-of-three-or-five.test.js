const multiplesOfThreeOrFive = number => {
  let sum = 0;
  for (let i = 0; i < number; i++){
      if (i % 3 == 0 || i % 5 == 0){
          sum += i
      }
  }
  return sum
}

test.each([
  [10, 23],
  [25, 143]
])(
  "Should returns the sum of all the multiples of 3 or 5 [ number: %p expected: %p]",
  (number, expected) => {
    //expect
    expect(multiplesOfThreeOrFive(number)).toEqual(expected);
  }
);

