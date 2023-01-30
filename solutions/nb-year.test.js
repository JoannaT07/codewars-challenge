const nbYear = (p0, percent, aug, p) => {
  let years = 0;
  while (p0 < p){
    p0 = Math.floor(p0 + (p0 * (percent/100)) + aug);
    years++
  }
  return years;
};

test.each([
  [1500, 5, 100, 5000, 15],
  [1500000, 2.5, 10000, 2000000, 10]
])('Find %p of times that must multiply the digits in %p', (p0, percent, aug, p, expected)=>{
    //expect
    expect(nbYear(p0, percent, aug, p)).toEqual(expected)
})