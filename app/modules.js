exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    function sayIt() {
      return this.greeting + ', ' + this.name;
    }
    return {
      name: str2,
      greeting: str1,
      sayIt: sayIt
    };
  }
};
