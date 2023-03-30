const createPhoneNumber = (numbers) => {
  const slice = (a, b) => numbers.slice(a, b).join("");
  return `(${slice(0, 3)}) ${slice(3, 6)}-${slice(6)}`;
};

test.each([
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "(123) 456-7890"],
  [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "(111) 111-1111"],
])(
  "Should returns a string in the form of a phone number [numbers: %p expected: %p]",
  (numbers, expected) => expect(createPhoneNumber(numbers)).toEqual(expected)
);
