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

const flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattened.push(array[i][j]);
      }
    } else {
      flattened.push(array[i]);
    }
  } return flattened;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])