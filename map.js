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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

const arr1 = ["sin", "bin", "min", "van", "plan", "Kazakistan"]
const arr2 = ["fun", "churn", "turn", "brain", "talon", "Azerbaijan"]
const arr3 = ["fun", "churn", "turn", "brain", "talon", 1]

const test1 = map(arr1, word => word[word.length-1]);
const test2 = map(arr2, word => word[word.length-1]);

assertArraysEqual(test1,test2);
assertArraysEqual(map(arr1, word => word[0]), map(arr2, word => word[0]));
assertArraysEqual(map(arr1, word => typeof word), map(arr3, word => typeof word));


