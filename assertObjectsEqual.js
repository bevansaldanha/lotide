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
      }
    } return true;
  } else {
      return false ;
  }
};
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let keys in object1) {
      if (Array.isArray(object1[keys])) {
        if (!eqArrays(object1[keys],object2[keys])) {
          return false;
        }
      }
      else if (object1[keys] !== object2[keys]) {
        return false;
      }
    } return true;
  } return false;
};
const assertObjectsEqual = function(firstObj, secondObj) {
  const inspect = require('util').inspect;
  if (eqObjects(firstObj,secondObj)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(firstObj)} ===  ${inspect(secondObj)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(firstObj)} !==  ${inspect(secondObj)}`);
  }
};
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);

