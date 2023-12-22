const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;

  const parsedActivity = parseFloat(sampleActivity);
  if (isNaN(parsedActivity) || parsedActivity <= 0 || parsedActivity >= MODERN_ACTIVITY) {
    return false;
  }

  const age = Math.log(MODERN_ACTIVITY / parsedActivity);
  return Math.ceil(age / k);
}

module.exports = {
  dateSample
};
