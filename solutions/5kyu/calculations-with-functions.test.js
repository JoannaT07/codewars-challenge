const zero = e => e ? e(0) : 0
const one = e => e ? e(1) : 1
const two = e => e ? e(2) : 2
const three = e => e ? e(3) : 3
const four = e => e ? e(4) : 4
const five = e => e ? e(5) : 5
const six = e => e ? e(6) : 6
const seven = e =>  e ? e(7) : 7
const eight = e => e ? e(8) : 8
const nine = e => e ? e(9) : 9

const plus = e => f => e + f;
const minus = e => f => f - e;
const times = e => f => e * f;
const dividedBy = e => f => Math.floor((f / e));

test.each([
  [seven(times(five())), 35],
  [eight(dividedBy(three())), 2],
  [four(plus(nine())), 13],
  [eight(minus(three())), 5],
  [six(dividedBy(two())), 3]
])(
  "Should calculating with functions [ func: %p expected: %p]",
  (func, expected) => {
    //expect
    expect(func).toEqual(expected);
  }
);