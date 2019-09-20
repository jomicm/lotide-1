const assertEqual = function(actual, expected) {
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
};

//function takes in two objects and returns true or false, based on a perfect match.

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { // checks for matching amoumt of properties
    for (const key of Object.keys(object1)) { // loops through each object1
      if (Array.isArray(object1[key])) { // evaluations for arrays to pass through eqArrays
        if (!eqArrays(object1[key], object2[key])) { // if keys are not equiv
          return false;
        }
      } else if (typeof(object1[key]) === 'object')  { // evaluates if object
        if (!eqObjects(object1[key], object2[key])) { // if recursion of both objects returns false
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) { // check for string equivalency
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
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

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false