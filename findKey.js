const findKey  = function(obj,callback) {
  for (let keys in obj) {
    if (callback(obj[keys])) {
      return  keys;
    }
  } return undefined;
};

module.exports = findKey;
