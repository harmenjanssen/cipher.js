const alphabet = () => [..."abcdefghijklmnopqrstuvwxyz "];

const equals = x => y => x === y;

const toObj = (keys, values, index = keys.length - 1) =>
  typeof keys[index] === "undefined"
    ? {}
    : Object.assign(toObj(keys, values, index - 1), {
        [keys[index]]: values[index]
      });

const isVowel = s => [..."aeiouy"].includes(s);

const toAlphabetKey = values => toObj(alphabet(), values);

const shiftRight = key => {
  const values = Object.values(key);
  const last = values[values.length - 1];
  return toAlphabetKey([last, ...values.slice(0, -1)]);
};

const shiftLeft = key => {
  const values = Object.values(key);
  return toAlphabetKey([...values.slice(1), values[0]]);
};

module.exports = {
  alphabet,
  equals,
  toObj,
  isVowel,
  toAlphabetKey,
  shiftRight,
  shiftLeft
};
