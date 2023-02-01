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
])("Should return years needed to get a population greater or equal to p [ p0: %p, percent: %p, aug: %p, p: %p, years: %p]", (p0, percent, aug, p, expected)=>{
    //expect
    expect(nbYear(p0, percent, aug, p)).toEqual(expected)
})