exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var res = [];
    var dirs = [];
    function getFiles(dir) {
      var files = dir.files;
      dirs.push(dir.dir);
      files.forEach(function (file) {
        if (typeof file === 'string') {
          if (!dirName || dirs.includes(dirName)) {
            res.push(file);
          }
        } else {
          getFiles(file);
        }
      });
      dirs.pop();
    }
    getFiles(data);
    return res;
  },

  permute: function(arr) {
    var permArr = [];
    var usedChars = [];

    function permute(input) {
      var i;
      var ch;
      for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length === 0) {
          permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
      }
      return permArr;
    }
    return permute(arr);
  },

  fibonacci: function(n) {
    if (n < 2) {
      return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    var res = [];
    function addParenthesis(prefix, opened, closed){
      if (closed === n) { res.push(prefix); }
      if (opened < n) { addParenthesis(prefix + '(', opened + 1, closed); }
      if (closed < opened) { addParenthesis(prefix + ')', opened, closed + 1); }
    }
    addParenthesis('', 0, 0);
    return res;
  }
};
