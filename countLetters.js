const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};
const countLetters = function(sentence) {
  let counter = {};
  for (let letters of sentence.split(" ").join("").toLowerCase()) {
    if (counter[letters]) {
      counter[letters] += 1;
    } else {
      counter[letters] = 1;
    }
  }
  return counter;
};
