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

module.exports = countLetters;