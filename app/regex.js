exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var reg = /\d/g;
    return reg.test(str);
  },

  containsRepeatingLetter: function(str) {
    var reg = /([a-z])\1/gi;
    return reg.test(str);
  },

  endsWithVowel: function(str) {
    var reg = /[aeiouy]$/gi;
    return reg.test(str);
  },

  captureThreeNumbers: function(str) {
    var reg = /\d{3}/;
    var matches = str.match(reg) || [];
    return matches.length ? matches[0] : false;
  },

  matchesPattern: function(str) {
    var reg = /^\d{3}-\d{3}-\d{4}$/g;
    return reg.test(str);
  },

  isUSD: function(str) {
    var reg = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return reg.test(str);
  }
};
