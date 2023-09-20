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
const middle = function(arr) {
  let midArray = [];
  if (arr.length > 2) {
    let arrLength = arr.length / 2;
    if (Number.isInteger(arrLength)) {
      midArray.push(arr[arrLength - 1]);
      midArray.push(arr[arrLength]);
    } else {
      midArray.push(arr[Math.floor(arrLength)]);
    }
  }
  return midArray;
};

assertArraysEqual(middle(['q', 2, 3, 4, 5, 4]),middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle(['r', 2, 3, 5, 5, 9]),middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([100,'q', 2, 3, 4, 5, 4, 'w']),middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([ 3, 4, 5, 4]),middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle(['q', 2, 3, 4, 5, 4, true]),middle([false, 1, 2, 3, 4, 5, 6]));


