const assertEqual = require('./assertEqual');

const tail = function(arr) {
  const newArr = [];
  if (arr.length === 0) {
    return undefined;
  } else if (arr.lengtht === 1) {
    return arr;
  }
  for (let i = 1; i < arr.length; i++){
    newArr.push(arr[i]);
  }
  return newArr;
};

module.exports = tail;