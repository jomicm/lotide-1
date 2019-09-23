const assertEqual = require('../assertEqual');
const tail = require('../tail')
const assert = require('chai').assert

const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

describe('tail', () => {
  it('should return 3 for words.length', () => {
    assert.strictEqual(tail(words).length, 2);
  });
});