const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error('Error');
  }
  if (arr.length === 0) {
    return arr;
  }
  function check(elem) {
    return (
      elem === '--double-next' ||
      elem === '--double-prev' ||
      elem === '--discard-next' ||
      elem === '--discard-prev'
    );
  }
  if (!arr.some(check)) {
    return arr;
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (newArr.length && arr[i - 2] !== '--discard-next') {
          newArr.splice(newArr.length - 1, 1);
        }
        break;
      case '--double-next':
        if (i !== arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          newArr.push(arr[i - 1]);
        }
        break;
      default:
        newArr.push(arr[i]);
        break;
    }
  }

  // arr.forEach((item, i, arr) => {
  //   if (item === '--discard-prev') {
  //     if (newArr.length !== 0 && arr[i - 2] === '--discard-next') {
  //       newArr.splice(newArr.length - 1, 1);
  //     }
  //     null;
  //   } else if (item === '--discard-next') {
  //     null;
  //   } else if (item === '--double-prev') {
  //     if (i !== 0 && arr[i - 2] !== '--discard-next') {
  //       newArr.push(arr[i - 1]);
  //     }
  //     null;
  //   } else if (item === '--double-next') {
  //     if (i !== arr.length - 1) {
  //       newArr.push(arr[i + 1]);
  //     }
  //     null;
  //   } else {
  //     if (arr[i + 1] !== '--discard-prev') {
  //       newArr.push(item);
  //     }
  //   }
  // });

  // arr.forEach((item, i) => {
  //   if (item === '--double-next') {
  //     newArr[i] = newArr[i + 1];
  //     console.log(newArr);
  //   }
  //   if (item === '--double-prev') {
  //     newArr[i] = newArr[i - 1];
  //     console.log(newArr);
  //   }
  //   if (item === '--discard-next') {
  //     newArr[i] = newArr[i + 1] = null;
  //   }
  //   if (item === '--discard-prev' && arr[i - 1] !== undefined) {
  //     newArr[i] = newArr[i - 1] = null;
  //   }
  //   if (item === '--discard-prev' && arr[i - 1] === undefined) {
  //     newArr[i] = null;
  //   }
  // else if (item === '--discard-prev' && newArr[i - 1] === null) {
  //   console.log('aa');
  //   newArr[i] = newArr[i - 3] = null;
  // }
  // });

  // for (let i = 0; i < arr.length; i++) {
  //   if (
  //     newArr.length === 0 &&
  //     (arr[i] === '--discard-prev' || arr[i] === '--double-prev')
  //   ) {
  //     null;
  //   } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
  //     newArr.splice(newArr.length - 1, 1);
  //   } else if (
  //     arr[i] === '--double-next' &&
  //     !arr[i + 1] &&
  //     i + 1 < arr.length
  //   ) {
  //     newArr.push(arr[i + 1]);
  //   } else if (arr[i] === '--double-next' && arr[i + 2] === '--discard-prev') {
  //     newArr.push(arr[i + 1]);
  //     i += 2;
  //   } else if (
  //     arr[i] === '--double-next' &&
  //     arr[i + 2] !== '--discard-prev' &&
  //     arr[i + 1]
  //   ) {
  //     newArr.push(arr[i + 1]);
  //   } else if (arr[i] === '--discard-next' && arr[i + 2] === '--discard-prev') {
  //     i += 2;
  //   } else if (
  //     arr[i] === '--discard-next' &&
  //     arr[i + 1] &&
  //     arr[i + 2] !== '--double-prev'
  //   ) {
  //     i += 1;
  //   } else if (
  //     arr[i] === '--discard-next' &&
  //     !arr[i + 1] &&
  //     i + 1 < arr.length
  //   ) {
  //     i++;
  //   } else if (arr[i] === '--discard-next' && arr[i + 2] === '--double-prev') {
  //     i += 2;
  //   } else if (i !== 0 && arr[i] === '--double-prev') {
  //     newArr.push(arr[i - 1]);
  //   } else if (
  //     (arr[i] === '--double-next' || arr[i] === '--discard-next') &&
  //     !arr[i + 1] &&
  //     i + 1 === arr.length
  //   ) {
  //     console.log('eee');
  //     return newArr;
  //   } else {
  //     console.log('push', arr[i]);
  //     newArr.push(arr[i]);
  //   }
  // }

  return newArr;
};
