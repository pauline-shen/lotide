const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


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

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);