const _ = require("./util");

module.exports = {
  encode(input, key) {
    return Array.from(input).reduce(
      (str, char) => {
        const nextLetter = key[char];
        const output = str + nextLetter;
        key = _.isVowel(char) ? _.shiftRight(key) : _.shiftLeft(key);
        return output;
      },
      ""
    );
  },

  decode(input, key) {
    return Array.from(input).reduce(
      (str, char) => {
        const lookup = _.toObj(Object.values(key), Object.keys(key));
        const nextLetter = lookup[char];
        const output = str + nextLetter;
        key = _.isVowel(nextLetter) ? _.shiftRight(key) : _.shiftLeft(key);
        return output;
      },
      ""
    );
  },

  getKeyFrom(start) {
    const alpha = _.alphabet();
    const matchIndex = alpha.findIndex(_.equals(start));
    return _.toAlphabetKey(
      alpha.slice(matchIndex).concat(alpha.slice(0, matchIndex))
    );
  }
};
