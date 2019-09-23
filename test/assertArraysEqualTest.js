const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArrayEqual', () => {
  it('should return false for [1, 2, 3, 4, 5] and [1, 2, 3, 4]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4]), false);
  });
});