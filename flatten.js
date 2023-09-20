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
const flatten = function (args) {
  let flattenedArrary = [];
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let vals of args[i]) {
        flattenedArrary.push(vals);
      }
    } else {
      flattenedArrary.push(args[i]);
    }
  } console.log(flattenedArrary);
};
