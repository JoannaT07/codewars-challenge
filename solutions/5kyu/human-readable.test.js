const humanReadable = (seconds) => {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds / 60) % 60);
  seconds = seconds % 60;
  const zero = (e) => (e > 9 ? e : "0" + e);
  return `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
};

test.each([
  [0, "00:00:00"],
  [60, "00:01:00"],
  [90, "00:01:30"],
  [3599, "00:59:59"],
  [3600, "01:00:00"],
  [86399, "23:59:59"],
])(
  "Should return the time in a human-readable format [ seconds: %p expected: %p]",
  (seconds, expected) => {
    //expect
    expect(humanReadable(seconds)).toEqual(expected);
  }
);
