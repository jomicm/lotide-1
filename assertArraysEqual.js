const eqArrays = function(array1, array2) {
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑Assertion Failed: ${array1} !== ${array1}`);
  }
}

assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4])
assertArraysEqual(["1", "2", 3], ["1", "2", "3"]);
assertArraysEqual(["one", "two"], ["one", "two"]);
assertArraysEqual(["one", "two"], [1, "two"]);