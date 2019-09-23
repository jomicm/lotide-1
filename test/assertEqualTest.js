const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('should return fals for Lighthouse Labs and Bootcamp', () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'), false);
  });
});