const assertEqual = require('./assertEqual')

let tail = function(array) {
  let tailed = [];
  for (let i = 1; i < array.length; i++) {
    tailed.push(array[1]);
  }
  return tailed;
};

module.exports = tail;