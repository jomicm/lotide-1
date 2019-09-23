
const without = function(source, itemsToRemove) {
  let withoutItems = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i]) === false) {
      withoutItems.push(source[i]);
    }
  } return withoutItems;
};

module.exports = without;