exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData: function(url) {
    var status = function (response) {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText));
      }
      return Promise.resolve(response);
    };
    var json = function (response) {
      return response.json();
    };
    return fetch(url).
    then(status).
    then(json).
    then(function (data) {
      return data[Object.keys(data)[0]].map(function (cur) {
        return cur.name;
      }).sort();
    }).
    catch(function (error) {
            console.log(error);
    });
  }
};
