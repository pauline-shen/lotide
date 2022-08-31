# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pauline-shen/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: log whether two arrays (arr1, arr2) are equal
* `assertEqual(actual, expected)`: log whether two items are equal
* `assertObjectsEqual(actual, expected)`: log whether two objects are equal
* `countLetters(sentence)`: return occurence of each letter in a sentence
* `countOnly(allItems, itemsToCount)`: return count of specific strings (itemsToFCocunt) in allItems
* `eqArrays(arr1, arr2)`: return whether two arrays (arr1, arr2) are equal
* `eqObjects(object1, object2)`: return whether two objects (object1, 2) are equal
* `findKey(obj, callback)`: return key of first key in obj that has value make callback function return true
* `findKeyByValue(obj, val)`: return the key in obj that has the value indicated as val
* `flatten(arr)`: return flattened arr with one level of nested array
* `head(arr)`: return first item in an arr
* `letterPositions(sentence)`: return key as each letter in sentence and value is occurrence indices in array
* `map(array, callback)`: return array being mapped two the callback function
* `middle(arr)`: return array that contains middle element(s) in arr