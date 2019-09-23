# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jomicm/lotide`

**Require it:**

`const _ = require('@jomicm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: takes an array and returns the element at the first index
* `tail(arr)`: takes an array and returns all elements after the first index
* `middle(arr)`: takes an array and returns the middle element (one element for odd number, two elements for even number)
* `assertArraysEqual([arr1], [arr1])`: It will compare two different arrays and return true if equal or false if different
* `assertEqual(val1, val2)`: It will compare two different primitives and return true if equal or false if different
* `eqArrays([arr1], [arr2])`: It will compare two different arrays and return true if equal or false if different
* `countLetters(string)`: It will return how many letters a given string has
* `countOnly(allItems, itemsToCount)`: It will count elements unless they have a false value
* `eqObject(object1, object2)`: It will compare two objects
* `findKey(object, callback)`: It will find the element which key is the string provided
* `findKeyByValue(object, value)`: It will find the element which value is the string provided
* `flatten([arr1], [arr2])`: It will integrate nested arrays into a single array
* `letterPositions(sentence)`: It will return the ocurrences of all the letter in a given string
* `map(array, callback)`: It will return a new array based on the callback of the function
* `assertObjectsEqual(object1, object2)`: It will compare two Objects
* `takeUntil(array, callback)`: It will return an array containing all elements of a given array but stopping at a given value
* `without(source, itemsToRemove)`: It will return an array containing all elements of a given array but the ones contained in another given array