const sumStrings = (a, b) => {
  return (BigInt(a) + BigInt(b)).toString()
}

test.each([
  ["1", "2", "3"],
  ["123", "456", "579"],
  ["712569312664357328695151392", "8100824045303269669937", "712577413488402631964821329"]
])(
  "Should remove all values from list a, which are present in list b [ message: %p expected: %p]",
  (a, b, expected) => {
    //expect
    expect(sumStrings(a, b)).toEqual(expected);
  }
);

