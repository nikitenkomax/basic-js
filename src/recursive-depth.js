const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrStr = JSON.stringify(arr);
    let newArr = arrStr.split('').filter((item) => {
      return item === '[' || item === ']';
    });
    let count1 = 0;
    let countArr = [];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === '[') {
        count1 += 1;
      }
      if (newArr[i] === ']') {
        countArr.push(count1);
        count1 -= 1;
      }
    }
    return countArr.sort(function (a, b) {
      return a - b;
    })[countArr.length - 1];
  }
};
