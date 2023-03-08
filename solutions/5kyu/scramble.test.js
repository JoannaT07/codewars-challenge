const scramble = (str1, str2) => {
  let extracted = str1;
  for (i = 0; i <= str2.length; i++) {
        extracted = extracted.replace(str2[i], "");
  }
  return str1.length - extracted.length === str2.length;
};

test.each([
  ["scriptingjava", "javascript", true],
  ["javscripts", "javascript", false],
  ["rkqodlw", "world", true],
  ["katas", "steak", false],
  ["abcdefghijklmnopqrstuvwxyz".repeat(10_000), "zyxcba".repeat(9_000), true],
])(
  "Should remove all values from list a, which are present in list b [ str1: %p str2: %p expected: %p]",
  (str1, str2, expected) => {
    //expect
    expect(scramble(str1, str2)).toEqual(expected);
  }
);

   //  const arr1 = [...str1];
   //  const arr2 = [...str2];
   //  arr2.forEach((e) => {
   //    const index = arr1.indexOf(e);
   //    if (index > -1) {
   //      arr1.splice(index, 1);
   //    }
   //  });
   //  return str1.length - arr1.length === str2.length;