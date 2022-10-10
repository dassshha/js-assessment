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
    function adjust(num) {
      var exponent, multiplier;

      if (num < 1) {
        exponent = Math.floor( Math.log(num) * -1 );
        multiplier = Math.pow(10, exponent);

        return {adjusted: num * multiplier, multiplier: multiplier};
      }

      return {adjusted: num, multiplier: 1};
    }
    var aNew = adjust(a);
    var bNew = adjust(b);
    var result = (aNew.adjusted * bNew.adjusted) / (aNew.multiplier * bNew.multiplier);

    return result;
  }
};
