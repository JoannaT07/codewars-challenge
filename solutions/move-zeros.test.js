const moveZeros = (arr) => {
  zeros = []
  arr.map(e => e === 0 && zeros.push(e))
  return arr.filter(e => e !== 0).concat(zeros)
};

test.each([
  [[1,2,0,1,0,1,0,3,0,1], [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]],
  [[false,1,0,1,2,0,1,3,"a"], [false,1,1,2,1,3,"a",0,0]]
])(
  "Should remove all values from list a, which are present in list b [ a: %p b: %p expected: %p]",
  (arr, expected) => {
    //expect
    expect(moveZeros(arr)).toEqual(expected);
  }
);

