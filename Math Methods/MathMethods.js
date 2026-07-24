// Math.PI ---> returns the value of pi
console.log("Value of PI is : ", Math.PI);

//Math.round ---> returns the nearest value
console.log("Returning the nearest value of 4.567 :", Math.round(4.567));

//Math.floor ---> returns Downwards
console.log(
  "Returning the downward roundoff of 123.4567 :",
  Math.floor(123.4567),
);

//Math.ceil ---> returns upwards
console.log("Retuning the upward roundoff of 12.4 :", Math.ceil(12.4));

//Math.trunc ---> removes decimal
console.log(
  "Removig the decimal point from the 123.456 :",
  Math.trunc(123.456),
);

//Math.abs ---> returns the absolute value
console.log("Retuning the absolute value of 123.456 :", Math.abs(123.456));

//Math.max ---> returns largest number
console.log("Retuning the largest number : ", Math.max(10, 20, 50, 80));

//Math.min ---> returns minimum number
console.log("Retuning the minimum Number : ", Math.min(20, 30, 80, 90));

//Math.pow ---> returns the power of the number
console.log("Returning 57 ^ 2 :", Math.pow(57, 2));

//Math.sqrt ---> returns the square root of the given number
console.log("SquareRoot of 144 :", Math.sqrt(144));

//Exponent Operator ---> returns the exponent of the number
console.log("2 **5 :", 2 ** 5);

//Math.cbrt ---> returns the cube root of the number
console.log("Cube Root of 166375 :", Math.cbrt(166375));

//Math.random ---> returns random number between 0 and 1
console.log("Printing random number between  0 to 10 :", Math.random());

//Pring random Integer
let random = Math.floor(Math.random() * 10) + 1;
console.log("Printing a random Number :", random);
