const findOdd = (numbers) => {
    const count = {};
    numbers.forEach((num) => {
      count[num] = (count[num] || 0) + 1;
    });
    return Number(Object.keys(count).find(num => count[num] % 2 !== 0));
  };

test.each([
    [[7,1,1,1,1],7],
    [[2,2,2,6,6,6,6], 2]
])("Should find number that occurs odd times [ numbers: %p expected: %p]", (arr, expected)=>{
    //expect
    expect(findOdd(arr)).toEqual(expected)
})