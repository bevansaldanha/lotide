const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};
const eqArrays = function(first, second) {
  if (first.length == second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      } else {
        return true;
      }
    } 
  } else {
    return false ;
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);