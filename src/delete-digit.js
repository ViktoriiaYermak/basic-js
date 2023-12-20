const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digit = String(n).split('').map(Number);

  const result = digit.reduce((x, _, i, arr) => {
    const digits = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const numberDigit = Number(digits.join(''));
    return Math.max(x, numberDigit);
  }, 0);

  return result;
}

module.exports = {
  deleteDigit
};
