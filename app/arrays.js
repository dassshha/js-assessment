exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var index = -1;
    arr.forEach(function (cur, i) {
      if (cur === item) {
        index = i;
      }
    });
    return index;
  },

  sum: function(arr) {
    return arr.reduce(function (sum, cur) {
      return sum + cur;
    });
  },

  remove: function(arr, item) {
    return arr.filter(function (cur) {
      return cur !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    var index = arr.indexOf(item);
    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item, index);
    }
    return arr;
  },

  append: function(arr, item) {
    return arr.concat(item);
  },

  truncate: function(arr) {
    return arr.slice(0, -1);
  },

  prepend: function(arr, item) {
    return [item].concat(arr);
  },

  curtail: function(arr) {
    return arr.slice(1);
  },

  concat: function(arr1, arr2) {
    var concated = [];
    for (var i = 0; i < arr1.length; i++) {
      concated.push(arr1[i]);
    }
    for (var j = 0; j < arr2.length; j++) {
      concated.push(arr2[j]);
    }
    return concated;
  },

  insert: function(arr, item, index) {
    return arr.slice(0, index).concat(item, arr.slice(index));
  },

  count: function(arr, item) {
    return arr.filter(function (cur) {
      return cur === item;
    }).length;
  },

  duplicates: function(arr) {
    var duplicated = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count += 1;
        }
      }
      if (count > 1) {
        if (!duplicated.includes(arr[i])) {
          duplicated.push(arr[i]);
        }
        count = 0;
      }
    }
    return duplicated;
  },

  square: function(arr) {
    return arr.map(function (cur) {
      return cur * cur;
    });
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce(function (occArr, cur, i) {
      if (cur === target) {
        occArr.push(i);
      }
      return occArr;
    }, []);
  }
};
