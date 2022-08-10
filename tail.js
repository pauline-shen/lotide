
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");