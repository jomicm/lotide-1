// function returns values until item = value from callback function

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) { // passes through item into the callback function (x)
      break; // breaks the loop when the callback(item)
    } else {
      results.push(item); // otherwise pushes the item into the results array
    }
  } return results;
};

module.exports = takeUntil;
