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
        console.log("u" + first[i] + "o" + second[i]);
        return false;
      }
    } return true;
  } else {
      console.log("Sheeesh")
      return false ;
  }
};
