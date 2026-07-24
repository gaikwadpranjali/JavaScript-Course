// A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const squares = numbers.map(function (num) {
  return num * num;
});
console.log(squares);
