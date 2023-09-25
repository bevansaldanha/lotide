const flatten = function (args) {
  let flattenedArrary = [];
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let vals of args[i]) {
        flattenedArrary.push(vals);
      }
    } else {
      flattenedArrary.push(args[i]);
    }
  } console.log(flattenedArrary);
};

module.exports = flatten;
