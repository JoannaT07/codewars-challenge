const descendingOrder = n => Number([...n.toString()].sort((a, b) => b - a).join(''));

test.each([
  [0, 0],
  [1, 1],
  [111, 111],
  [15, 51],
  [1021, 2110],
  [123456789, 987654321]
])("Should return integer with its digits in descending order [ n: %p expected: %p]", (n, expected)=>{
    //expect
    expect(descendingOrder(n)).toEqual(expected)
})