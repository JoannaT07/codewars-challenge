const towerBuilder = (nFlors) => {
  const arr = ["*".repeat(2 * nFlors - 1)];
  for (let i = 1; i < nFlors; i++){
  // \* - escape * sign 
  // (\s*) - finding group that contains zero or more blank spaces (\s)
  // $ end of string
  // $1 first founded group
    arr[i] = arr[i - 1].replace("*", " ").replace(/\*(\s*)$/, " $1")
  }
  return arr.reverse()
};

test.each([
  [2, [" * ","***"]],
  [1, ["*"]],
  [3, ["  *  "," *** ", "*****"]],
])(
  "Should build a tower with given floors [ floors: %p expected: %p]",
  (nFlors, expected) => {
    //expect
    expect(towerBuilder(nFlors)).toEqual(expected);
  }
);

