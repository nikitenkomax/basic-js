const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 1;
  for (let i = 1; i < disksNumber; i++) {
    turns = turns * 2 + 1;
  }
  const seconds = Math.floor((turns / turnsSpeed) * 3600);
  return { turns, seconds };
};
