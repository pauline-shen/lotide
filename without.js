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


const without = function(source, itemsToRemove) {
  const newArr = [];
  for (let toCheck of source) {
    let remove = false;
    for (let item of itemsToRemove) {
      if (toCheck === item) {
        remove = true;
      }
    }
    if (!remove) {
      newArr.push(toCheck);
    }
  }
  return newArr;
}


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]