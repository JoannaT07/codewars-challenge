const isValidWalk = (walk) => {
  const n = walk.filter((e) => e === "n").length;
  const s = walk.filter((e) => e === "s").length;
  const e = walk.filter((e) => e === "e").length;
  const w = walk.filter((e) => e === "w").length;

  return walk.length === 10 && n === s && e === w;
};

test.each([
  [['n','s','n','s','n','s','n','s','n','s'], true],
  [['w','e','w','e','w','e','w','e','w','e','w','e'], false],
  [['w'], false],
  [['n','n','n','s','n','s','n','s','n','s'], false]
])(
  "Should check if the walk will take exactly 10 minutes [ walk: %p expected: %p]",
  (walk, expected) => {
    //expect
    expect(isValidWalk(walk)).toEqual(expected);
  }
);

