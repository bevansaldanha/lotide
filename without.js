const  without = function(source, itemsToRemove) {
  let finalArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      finalArray.push(item);
    }
  }
  console.log(finalArray);
};

module.exports = without;