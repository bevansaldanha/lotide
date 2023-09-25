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

module.exports = letterPositions;
