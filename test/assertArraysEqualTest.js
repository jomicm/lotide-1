const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4]);
assertArraysEqual(["1", "2", 3], ["1", "2", "3"]);
assertArraysEqual(["one", "two"], ["one", "two"]);
assertArraysEqual(["one", "two"], [1, "two"]);