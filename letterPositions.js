
const letterPositions = function(sentence) {
  let count = 0; // push count number in place of index number when it is not the first occurance of the letter
  const results = {};
  for (const letter of sentence) { // loops through each letter in sentence
    if (letter !== " ") { // will not count for spaces
      const resultsCount = []; // pushes letter and index/count to an object before adding to array
      if (results[letter]) { // if the letter is already accounted for, push the count nummber instead of the index number
        results[letter].push(count);
      } else {
        resultsCount.push(sentence.indexOf(letter)); // if letter is not accounted for, push the index number (indexOf finds only the first index)
        results[letter] = resultsCount; // creates the key-value pair in the results object
      }
    } count += 1; // increase count by 1 for each time the loop is run, such that count = index
  }
  return results;
};

module.exports = letterPositions;