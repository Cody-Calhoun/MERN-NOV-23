// Higher Order Functions
// 1. Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
// 2. Higher-order functions allow us to abstract over actions, not just values.
// 3. They come in several forms. For example, you can have functions that create new functions.
// 4. Functions that change other functions.

// Callback Functions
// 1. Functions that are passed to other functions as arguments are called callback functions.
// 2. Callback functions are the most common example of higher-order functions.
// 3. Callback functions are used in async programming.
// 4. Callback functions are used in event handling.
// 5. Callback functions are used in array methods like forEach, map, filter, reduce, etc.

// Example 1: Callback Function
function greet(name) {
  console.log(`Hello ${name}`);
}

function sayName(callback) {
  const name = "John";
  callback(name);

}

sayName(greet);


// Map Function
// 1. The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// 2. map() does not change the original array.
// 3. map() calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.
// 4. callback is invoked only for indexes of the array which have assigned values, including undefined.
// 5. It is not called for missing elements of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).
// 6. map() does not mutate the array on which it is called (although callback, if invoked, may do so).
// 7. The range of elements processed by map() is set before the first invocation of callback.

// Example 2: Map Function
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((num) => {
    console.log(num);
    return num * 2;
});


console.log(arr);
console.log(newArr);


// Filter Function
// 1. The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// 2. filter() does not change the original array.
// 3. filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true.
// 4. callback is invoked only for indexes of the array which have assigned values, including undefined.
// 5. It is not called for missing elements of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).
// 6. filter() does not mutate the array on which it is called (although callback, if invoked, may do so).

// Example 3: Filter Function
// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.filter(function (item) {
//   return item % 2 === 0;
// });

// console.log(arr);
// console.log(newArr);


