const assertEqual = function(actual, expected, message) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertEqual;