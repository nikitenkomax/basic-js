const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  matrix.forEach((arr) => {
    arr.forEach((item) => {
      item === '^^' ? count++ : null;
    });
  });
  return count;
};
