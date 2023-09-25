const middle = function(arr) {
  let midArray = [];
  if (arr.length > 2) {
    let arrLength = arr.length / 2;
    if (Number.isInteger(arrLength)) {
      midArray.push(arr[arrLength - 1]);
      midArray.push(arr[arrLength]);
    } else {
      midArray.push(arr[Math.floor(arrLength)]);
    }
  }
  return midArray;
};

module.exports = middle;




