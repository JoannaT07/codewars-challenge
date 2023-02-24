const hoopCount = (n) => {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
};

test.each([
  [3, "Keep at it until you get it" ],
  [11, "Great, now move on to tricks" ]
])('Should return correct motivation sentence [ n: %p sentence: %p]', (n, expected)=>{
    //expect
    expect(hoopCount(n)).toEqual(expected)
})