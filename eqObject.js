const assertEqual = function(actual, expected, message) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//function takes in two objects and returns true or false, based on a perfect match.

const eqObjects = function(object1, object2) {
  let truthy; // place holder for true or false to prevent stopping the function
  if (Object.keys(object1).length === Object.keys(object2).length) { // checks for matching amoumt of properties
    for (const key of Object.keys(object1)) { // loops through each object1
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) { // evaluations for arrays to pass through eqArrays
        truthy = eqArrays(object1[key], object2[key])
      } else if (object1[key] === object2[key]) { // check for string equivalency
        truthy = true
      } else {
        truthy = false
        break;
      }
    }
  } else {
    truthy = false
  }
  return truthy
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false