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
])('Find %p of times that must multiply the digits in %p', (str, expected)=>{
    //expect
    expect(disemvowel(str)).toEqual(expected)
})