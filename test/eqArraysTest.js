const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;



// assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]), false);
// assertEqual(eqArrays(["1", "2", 3], ["1", "2", "3"]), false);
// assertEqual(eqArrays(["one", "two"], ["one", "two"]), true);
// assertEqual(eqArrays(["one", "two"], [1, "two"]), false);

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false

describe('#eqArray', () => {
  it('should return false for [1,2,3,4,5] and [1,2,3,4]',()=>{
    assert.strictEqual(eqArrays([1,2,3,4,5], [1,2,3,4]), false);
  });
});