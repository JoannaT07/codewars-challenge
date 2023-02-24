const domainName = (url) => {
  const i = url.indexOf(".");
  if (url.includes("www")) return url.split(".")[1];
  if (url.includes("//")) return url.slice(0, i).split("//")[1];
  return url.slice(0, i);
};

test.each([
  ["http://google.com", "google"],
  ["http://google.co.jp", "google"],
  ["www.xakep.ru", "xakep"],
  ["https://youtube.com", "youtube"],
])(
  "Should extract domain name from URL [ url: %p domain name: %p]",
  (url, expected) => {
    //expect
    expect(domainName(url)).toEqual(expected);
  }
);

