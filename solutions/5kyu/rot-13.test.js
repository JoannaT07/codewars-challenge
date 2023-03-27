const rot13 = (message) => {
  // solution 1
  // const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  // return message.replace(/[a-z]/gi, letter => output[input.indexOf(letter)])

  // solution 2
  const letters = {
    a: 'n',
    b: 'o',
    c: 'p',
    d: 'q',
    e: 'r',
    f: 's',
    g: 't',
    h: 'u',
    i: 'v',
    j: 'w',
    k: 'x',
    l: 'y',
    m: 'z',
    n: 'a',
    o: 'b',
    p: 'c',
    q: 'd',
    r: 'e',
    s: 'f',
    t: 'g',
    u: 'h',
    v: 'i',
    w: 'j',
    x: 'k',
    y: 'l',
    z: 'm',
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
  };
  let cipher = "";
  for (let i = 0; i < message.length; i++) {
    letters[message[i]] ? cipher += letters[message[i]] : cipher += message[i]
  }
  return cipher;
};

test.each([
  ["hello", "uryyb"],
  ["Codewars", "Pbqrjnef"],
  ["Should returns the string ciphered", "Fubhyq ergheaf gur fgevat pvcurerq"]
])(
  "Should returns the string ciphered with Rot13 [ message: %p expected: %p]",
  (message, expected) => {
    //expect
    expect(rot13(message)).toEqual(expected);
  }
);
