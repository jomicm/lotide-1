const assertEqual = require('./assertEqual');

let tail = function(array) {
  let tailed = [];
  for (let i = 1; i < array.length; i++) {
    tailed.push(array[i]);
  }
  return tailed;
};

module.exports = tail;