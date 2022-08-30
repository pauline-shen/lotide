const assertArraysEqual = require("./assertArraysEqual");


const middle = function(arr) {
  const mid = [];
  if (arr.length <= 2){
    return mid;
  } else if (arr.length % 2 != 0) {
    mid.push(arr[(arr.length - 1) / 2]);
  } else if (arr.length % 2 == 0) {
    mid.push(arr[(arr.length / 2 )- 1]);
    mid.push(arr[arr.length / 2 ]);
  }
  return mid;
};


module.exports = middle;