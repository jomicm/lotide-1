const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(array1, array2) {
  let truthy;
  for (let i = 0; i < (array1.length + array2.length); i++) {
    if (array1[i] !== array2[i]) {
      truthy = false;
    }
  } if (truthy === undefined) {
    truthy = true;
  }
  return truthy;
}

assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]), false);
assertEqual(eqArrays(["1", "2", 3], ["1", "2", "3"]), false);
assertEqual(eqArrays(["one", "two"], ["one", "two"]), true);
assertEqual(eqArrays(["one", "two"], [1, "two"]), false);