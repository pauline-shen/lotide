const flatten = function(arr) {
  const flattened = [];
  for (let item of arr) {
    if (Array.isArray(item)){
      for (let i of  item) {
        flattened.push(i);
      }
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}


console.log(flatten([1, 2, [3, 4], 5, [6]]))