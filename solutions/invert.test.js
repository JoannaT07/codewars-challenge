const invert = (array) => {
  return array.map(n => -n)
};

test.each([
  [[1,2,3,4,5], [-1,-2,-3,-4,-5]],
  [[1,-2,3,-4,5], [-1,2,-3,4,-5]],
  [[], []]
])("Should return the inverse value in array [ array: %p expected: %p]", (array, expected)=>{
    //expect
    expect(invert(array)).toEqual(expected)
})