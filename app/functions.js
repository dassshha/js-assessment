exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function (str1) {
      return str + ', ' + str1;
    };
  },

  makeClosures: function(arr, fn) {
    var closures = [];
    function makeFn(val) {
      return function () {
        return fn(val);
      };
    }
    arr.forEach(function (cur) {
      closures.push(makeFn(cur));
    });
    return closures;
  },

  partial: function(fn, str1, str2) {
    return function (punct) {
      return fn(str1, str2, punct);
    };
  },

  useArguments: function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    return fn.apply(null, Array.from(arguments).slice(1));
  },

  partialUsingArguments: function(fn) {
    var args1 = Array.from(arguments).slice(1);
    return function () {
      var args2 = Array.from(arguments);
      return fn.apply(null, args1.concat(args2));
    }
  },

  curryIt: function(fn) {
    return function (x) {
      return function (y) {
        return function (z) {
          return fn(x, y, z);
        };
      };
    };
  }
};
