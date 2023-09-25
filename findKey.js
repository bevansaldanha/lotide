const findKey  = function(obj,callback) {
  for (let keys in obj) {
    if (callback(obj[keys])) {
      return  keys;
    }
  } return undefined;
};

module.exports = findKey;

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))

console.log(findKey({
  "Blue Hill": { stars: 1, chefs: 12 },
  "Akaleri":   { stars: 3, chefs: 21 },
  "noma":      { stars: 2, chefs: 24 },
  "elBulli":   { stars: 3, chefs: 21},
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.chefs === 21));

console.log(findKey({
  "Blue Hill": { stars: 1, chefs: 12 },
  "Akaleri":   { stars: 3, chefs: 21 },
  "noma":      { stars: 2, chefs: 24 },
  "elBulli":   { stars: 3, chefs: 21},
  "Ora":       { stars: 2, service: "idk, maybe?"},
  "Akelarre":  { stars: 3, service: "nah, not today"}
}, x => x.service === 'yes'));
