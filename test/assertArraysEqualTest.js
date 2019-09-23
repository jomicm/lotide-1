const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4]);
// assertArraysEqual(["1", "2", 3], ["1", "2", "3"]);
// assertArraysEqual(["one", "two"], ["one", "two"]);
// assertArraysEqual(["one", "two"], [1, "two"]);

describe('#assertArrayEqual', () => {
  it('should return false for [1, 2, 3, 4, 5] and [1, 2, 3, 4]', () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4]), false);
  });
});