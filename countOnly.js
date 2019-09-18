const assertEqual = function(actual, expected, message) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// The function should report back how many instances of each string were found in the allItems array of strings.

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}; // hold the counts for the itemsToCount
  for (const item of allItems) { // loops through allItems list
    if (itemsToCount[item]) { // if it's an item in itemsToCount
      if (results[item]) { // if it's an item already in results, increase count by 1
        results[item] += 1;
      } else { // if it's not already an item in results, count set to 1
        results[item] = 1;
      }
    }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(countOnly(firstNames, result1))
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);