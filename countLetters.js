const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  for (let letter of sentence) {
    if (result[letter]) {
      result[letter] += 1;
    } else if (letter !== " "){
      result[letter] = 1;
    }
  }
  return result;
}