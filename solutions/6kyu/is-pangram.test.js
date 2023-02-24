const isPangram = (string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return [...alphabet].every(n => string.toLowerCase().includes(n))
};

test.each([
  ["The quick brown fox jumps over the lazy dog.", true],
  ["This is not a pangram.", false]
])('Should check if string is pangram [ string: %p expected: %p]', (string, expected)=>{
    //expect
    expect(isPangram(string)).toEqual(expected)
})