const findKeyByValue = function(obj, val) {
  let counter = undefined;
  for (let keys in obj) {
    if (obj[keys] === val) {
      counter = keys;
    }
  } return counter;
};

module.exports = findKeyByValue;


