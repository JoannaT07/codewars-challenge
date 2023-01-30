const positiveSum = (arr) => {
  return arr.reduce((acc, value) => value >= 0 ? acc + value : acc + 0, 0)
};

test.each([
  [[-1,2,3,4,-5], 9],
  [[-1,-2,-3,-4,-5], 0],
  [[], 0]
])('Find %p of times that must multiply the digits in %p', (arr, expected)=>{
    //expect
    expect(positiveSum(arr)).toEqual(expected)
})