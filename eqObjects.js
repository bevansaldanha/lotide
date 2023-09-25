const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let keys in object1) {
      if (object1[keys] instanceof Object) {
        return eqObjects(object1[keys],object2[keys]);
      }
      if (object1[keys] !== object2[keys]) {
        return false;
      }
    } return true;
  } return false;
};

module.exports = eqObjects;