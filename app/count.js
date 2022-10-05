exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var current = start;
    var timerId;

    function go() {
      console.log(current);
      if (current === end) {
        clearInterval(timerId);
      }
      current++;
    }

    go();
    timerId = setInterval(go, 100);
    return {
      cancel: function () {
        clearInterval(timerId);
      }
    };
  }
};
