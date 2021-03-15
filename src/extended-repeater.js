const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  if (typeof str !== 'string') {
    str = `${str}`;
  }
  if (typeof options.addition !== 'string' && options.addition !== undefined) {
    options.addition = `${options.addition}`;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  let newAddition = '';
  let newStr = '';
  if (options.additionRepeatTimes && options.addition) {
    newAddition = Array(options.additionRepeatTimes)
      .fill(options.addition)
      .join(additionSeparator);
  }
  if (options.repeatTimes) {
    newStr = Array(options.repeatTimes)
      .fill(str + newAddition)
      .join(separator);
  }
  return newStr;
};
