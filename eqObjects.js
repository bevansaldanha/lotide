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
      if (object1[keys] instanceof Object) {
        return eqObjects(object1[keys],object2[keys]);
      }
      if (object1[keys] !== object2[keys]) {
        return false;
      }
    } return true;
  } return false;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);


const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));

console.log(eqObjects({ a: { x: {bev:"an"} }, b: 2 }, { a: { x: {bev:"an"} }, b: 2 }));




// if (object1[keys]) {
//   if (!eqArrays(object1[keys],object2[keys])) {
//     return false;
//   }
// }
// else