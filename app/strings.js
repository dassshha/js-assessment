exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var reduced = '';
    var symb = str[0];
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== symb) {
        count = 0;
        symb = str[i];
      }
      count += 1;
      if (count <= amount) {
        reduced += str[i];
      }
    }
    return reduced;
  },

  wordWrap: function(str, cols) {
    var arr = str.split(' ');
    var wrapped = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i].length > cols) {
        wrapped += '\n' + arr[i];
      }
      if (wrapped.length + arr[i].length > cols) {
        wrapped += '\n' + arr[i];
      } else {
        wrapped += ' ' + arr[i];
      }
    }
    return wrapped;
  },

  reverseString: function(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
};
