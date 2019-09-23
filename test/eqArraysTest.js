const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArray', () => {
  it('should return false for [1,2,3,4,5] and [1,2,3,4]',()=>{
    assert.strictEqual(eqArrays([1,2,3,4,5], [1,2,3,4]), false);
  });
});