const invert = (array) => {
  return array.map(n => -n)
};

test.each([
  [[1,2,3,4,5], [-1,-2,-3,-4,-5]],
  [[1,-2,3,-4,5], [-1,2,-3,4,-5]],
  [[], []]
])('Find %p of times that must multiply the digits in %p', (array, expected)=>{
    //expect
    expect(invert(array)).toEqual(expected)
})