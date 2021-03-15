const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(options) {
    if (options || options === undefined) {
      this.options = true;
    } else {
      this.options = false;
    }
  }
  encrypt(str, key) {
    if (arguments.length <= 1) {
      throw new Error('Error');
    }
    let arr_EN = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    let keyArr = [];
    let spaceIndArr = [];

    str
      .toUpperCase()
      .split('')
      .forEach((item, i) => {
        if (item === ' ') {
          spaceIndArr.push(i);
        }
      });

    let strArr = str.toUpperCase().split(' ').join('').split('');
    if (key.toUpperCase().split('').length >= strArr.length) {
      keyArr = key.toUpperCase().split('');
    } else {
      let count = 0;
      for (let i = 0; i < strArr.length; i++) {
        keyArr.push(key.toUpperCase().split('')[count]);
        count++;
        if (count >= key.toUpperCase().split('').length) {
          count = 0;
        }
      }
    }

    let newStrArr = [];

    strArr.forEach((item, i) => {
      if (arr_EN.indexOf(item) === -1) {
        newStrArr.push(item);
      } else {
        let newLetterInd = arr_EN.indexOf(item) + arr_EN.indexOf(keyArr[i]);

        if (newLetterInd > 25) {
          newLetterInd = newLetterInd - 26;
        }
        newStrArr.push(arr_EN[newLetterInd]);
      }
    });

    spaceIndArr.forEach((item) => {
      newStrArr.splice(item, 0, ' ');
    });
    if (this.options) {
      return newStrArr.join('');
    } else {
      return newStrArr.reverse().join('');
    }
  }
  decrypt(str, key) {
    if (arguments.length <= 1) {
      throw new Error('Error');
    }
    let arr_EN = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    let keyArr = [];
    let spaceIndArr = [];
    str
      .toUpperCase()
      .split('')
      .forEach((item, i) => {
        if (item === ' ') {
          spaceIndArr.push(i);
        }
      });

    let strArr = str.toUpperCase().split(' ').join('').split('');
    if (key.toUpperCase().split('').length >= strArr.length) {
      keyArr = key.toUpperCase().split('');
    } else {
      let count = 0;
      for (let i = 0; i < strArr.length; i++) {
        keyArr.push(key.toUpperCase().split('')[count]);
        count++;
        if (count >= key.toUpperCase().split('').length) {
          count = 0;
        }
      }
    }

    let newStrArr = [];

    strArr.forEach((item, i) => {
      if (arr_EN.indexOf(item) === -1) {
        newStrArr.push(item);
      } else {
        let newLetterInd = arr_EN.indexOf(item) - arr_EN.indexOf(keyArr[i]);

        if (newLetterInd < 0) {
          newLetterInd = newLetterInd + 26;
        }
        newStrArr.push(arr_EN[newLetterInd]);
      }
    });

    spaceIndArr.forEach((item) => {
      newStrArr.splice(item, 0, ' ');
    });

    if (this.options) {
      return newStrArr.join('');
    } else {
      return newStrArr.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
