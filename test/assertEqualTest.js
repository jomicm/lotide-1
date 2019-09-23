const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Hello", "Hello");
// assertEqual(10, 14);
// assertEqual(1, 1);

describe('#assertEqual', () => {
  it('should return fals for Lighthouse Labs and Bootcamp', () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'), false);
  });
});