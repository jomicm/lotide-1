const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleIndex = Math.floor(array.length/2);
  let middleNumber = []
  if (array.length % 2 === 1) {
    middleNumber.push(array[middleIndex])
  } if (array.length % 2 === 0) {
    middleNumber.push(array[middleIndex - 1])
    middleNumber.push(array[middleIndex])
  }
  return middleNumber;
}

module.exports = middle;