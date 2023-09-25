const assertArraysEqual = require('../assertArraysEqual');
const middle = require("../middle");

assertArraysEqual(middle(['q', 2, 3, 4, 5, 4]),middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle(['r', 2, 3, 5, 5, 9]),middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([100,'q', 2, 3, 4, 5, 4, 'w']),middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle([ 3, 4, 5, 4]),middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual(middle(['q', 2, 3, 4, 5, 4, true]),middle([false, 1, 2, 3, 4, 5, 6]));
