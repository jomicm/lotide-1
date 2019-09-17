const assertEqual = function(actual, expected, message) {
  if (actual === expected) { 
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Hello", "Hello");
assertEqual(10, 14);
assertEqual(1, 1);