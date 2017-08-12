const assert = require("assert");
const cipher = require("./cipher");

describe("getKeyFrom", () => {
  it("should return an alphabetical key", () => {
    assert.deepEqual(cipher.getKeyFrom("b"), {
      a: "b",
      b: "c",
      c: "d",
      d: "e",
      e: "f",
      f: "g",
      g: "h",
      h: "i",
      i: "j",
      j: "k",
      k: "l",
      l: "m",
      m: "n",
      n: "o",
      o: "p",
      p: "q",
      q: "r",
      r: "s",
      s: "t",
      t: "u",
      u: "v",
      v: "w",
      w: "x",
      x: "y",
      y: "z",
      z: " ",
      " ": "a"
    });

    assert.deepEqual(cipher.getKeyFrom("r"), {
      a: "r",
      b: "s",
      c: "t",
      d: "u",
      e: "v",
      f: "w",
      g: "x",
      h: "y",
      i: "z",
      j: " ",
      k: "a",
      l: "b",
      m: "c",
      n: "d",
      o: "e",
      p: "f",
      q: "g",
      r: "h",
      s: "i",
      t: "j",
      u: "k",
      v: "l",
      w: "m",
      x: "n",
      y: "o",
      z: "p",
      " ": "q"
    });
  });
});

describe("encode", () => {
  it("should encode a string", () => {
    assert.equal(
      cipher.encode("hello world", cipher.getKeyFrom("b")),
      "igmnrbzsupi"
    );
  });
});

describe("decode", () => {
  it("should decode a string", () => {
    assert.equal(
      cipher.decode("igmnrbzsupi", cipher.getKeyFrom("b")),
      "hello world"
    );
  });
});
