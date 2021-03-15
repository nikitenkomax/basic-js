const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (members instanceof Array) {
    let newMembers = [];
    members.forEach((name) => {
      if (typeof name === 'string') {
        newMembers.push(name.trim().split('')[0].toUpperCase());
      }
    });
    return newMembers.sort().reduce((str, letter) => {
      return (str += letter);
    }, '');
  }
  return false;
};
