const reverseWords = (str) => {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};

test.each([
  ["This is an example!", "sihT si na !elpmaxe"],
  ["Bobasek jest malutki", "kesaboB tsej iktulam"]
])('Find %p of times that must multiply the digits in %p', (str, expected)=>{
    //expect
    expect(reverseWords(str)).toEqual(expected)
})