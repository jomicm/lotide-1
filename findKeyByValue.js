
// function findKeyByValue which takes in an object and a value,
// scans the object and return the first key which contains the given value
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) { // Object.key() will run through the properties of the object
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;