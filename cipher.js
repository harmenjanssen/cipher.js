const _ = require("./util");

module.exports = {
  encode(input, key) {
    return Array.from(input).reduce(
      ({ result, key }, char) => {
        const nextLetter = key[char];
        return {
          result: result + nextLetter,
          key: _.isVowel(char) ? _.shiftRight(key) : _.shiftLeft(key)
        };
      },
      { result: "", key }
    ).result;
  },

  decode(input, key) {
    return Array.from(input).reduce(
      ({ result, key }, char) => {
        const lookup = _.flipObj(key);
        const nextLetter = lookup[char];
        return {
          result: result + nextLetter,
          key: _.isVowel(nextLetter) ? _.shiftRight(key) : _.shiftLeft(key)
        };
      },
      { result: "", key }
    ).result;
  },

  getKeyFrom(start) {
    const alpha = _.alphabet();
    const matchIndex = alpha.findIndex(_.equals(start));
    return _.toAlphabetKey(
      alpha.slice(matchIndex).concat(alpha.slice(0, matchIndex))
    );
  }
};
