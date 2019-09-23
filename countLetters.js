

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

module.exports = countLetters;