const assertEqual = function(actual, expected, message) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function counts the letters of a given string and results an object of letter: number

const countLetters = function(string) {
  const results = {}; // stores all the letters
  for (const letter of string) {
    if (letter !== " ") { // ignores all the spaces and does not count them
      if (results[letter]) { // if letter is already in results, increase count by 1
        results[letter] += 1;
      } else { // if letter is not already in results, create key and count (value) is 1
        results[letter] = 1;
      }
    }
  } return results;
};

console.log(countLetters("Lighthouse in the house"));

const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 1);
assertEqual(result1[" "], 3);