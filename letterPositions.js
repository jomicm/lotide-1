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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑Assertion Failed: ${array1} !== ${array1}`);
  }
}

const letterPositions = function(sentence) {
  let count = 0; // push count number in place of index number when it is not the first occurance of the letter
  const results = {};
    for (letter of sentence) { // loops through each letter in sentence
      if (letter !== " ") { // will not count for spaces
        const resultsCount = [] // pushes letter and index/count to an object before adding to array
        if (results[letter]) { // if the letter is already accounted for, push the count nummber instead of the index number
          results[letter].push(count)
        } else {
          resultsCount.push(sentence.indexOf(letter)) // if letter is not accounted for, push the index number (indexOf finds only the first index)
          results[letter] = resultsCount // creates the key-value pair in the results object
        } 
      } count += 1; // increase count by 1 for each time the loop is run, such that count = index
    }
  return results;
};

console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

// expected output for "lighthouse in the house"
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }