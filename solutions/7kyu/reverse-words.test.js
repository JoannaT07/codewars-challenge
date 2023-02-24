const reverseWords = (str) => {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};

test.each([
  ["This is an example!", "sihT si na !elpmaxe"],
  ["Bobasek jest malutki", "kesaboB tsej iktulam"]
])("Should reverses each word in the string [ str: %p expected: %p]", (str, expected)=>{
    //expect
    expect(reverseWords(str)).toEqual(expected)
})