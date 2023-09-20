const eqArrays = function(first, second) {
  if (first.length == second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};
const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray,secondArray)) {
    console.log(`✅✅✅  Assertion Passed: ${firstArray} ===  ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !==  ${secondArray}`);
  }
};
const letterPositions = function(sentence) {
  const results = {};
  let letters = sentence.split(" ").join("").toLowerCase().split('');
  for (let vals in letters) {
    if (results[letters[vals]]) {
      results[letters[vals]].push(vals);
    } else {
      results[letters[vals]] = [String(vals)];
    }
  }
  return results;
};
assertArraysEqual(letterPositions("hello").l,[2,3]);
