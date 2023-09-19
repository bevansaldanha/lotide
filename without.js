const eqArrays = function(first, second) {
  if (first.length == second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    } return true;
  } else {
      return false ;
  }
};
const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray,secondArray)) {
    console.log(`✅✅✅  Assertion Passed: ${firstArray} ===  ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !==  ${secondArray}`);
  }
};
const  without = function(source, itemsToRemove) {
  let finalArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      finalArray.push(item);
    }
  }
  console.log(finalArray);
};