const bouncingBall = (h, bounce, window) => {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    h = h * bounce;
    return 2 + bouncingBall(h, bounce, window)
  }
  return -1;
};

test.each([
  [3.0, 0.66, 1.5, 3],
  [30.0, 0.66, 1.5, 15],
  [3.0, 1.0, 1.5, -1],
])(
  "Should return number of times the ball passes in front of the window [ h: %p, bounce: %p, window: %p expected: %p]",
  (h, bounce, window, expected) => {
    //expect
    expect(bouncingBall(h, bounce, window)).toEqual(expected);
  }
);

