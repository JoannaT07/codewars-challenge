const disemvowel = (str) => {
  str = str.split("")
  const volwes = ["a", "e", "i", "o", "u"];
  volwes.forEach(volwe => {
      str = str.filter(letter => letter.toLowerCase() !== volwe)
  }) 
  return str.join("")
};

test.each([
  ["This website is for losers LOL!", "Ths wbst s fr lsrs LL!"],
  ["What are you, a communist?", "Wht r y,  cmmnst?"]
])("Should return a new string with all vowels removed [ str: %p expected: %p]", (str, expected)=>{
    //expect
    expect(disemvowel(str)).toEqual(expected)
})