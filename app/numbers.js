exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return Number(parseInt(num, 10).toString(2).
    split('').
    reverse()[bit - 1]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binary = parseInt(num, 10).toString(2);
    return binary.padStart(8, '0');
  },

  multiply: function(a, b) {
    return parseFloat(a * b);
  }
};
