const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(`( )`);
    } else {
      this.chain.push(`( ${value} )`);
    }

    return this;
  },
  removeLink(position) {
    if (!position || position === null || position % 1 !== 0) {
      this.chain.splice(0, this.chain.length);
      throw new Error('err');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishChain = this.chain.join('~~');
    this.chain.splice(0, this.chain.length);
    return finishChain;
  },
};

module.exports = chainMaker;
