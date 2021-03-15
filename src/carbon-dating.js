const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') return false;
  if (+sampleActivity && +sampleActivity <= 15 && +sampleActivity > 0) {
    const k = 0.693 / HALF_LIFE_PERIOD;
    return +Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  } else return false;
};
