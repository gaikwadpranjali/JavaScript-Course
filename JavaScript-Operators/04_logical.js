const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a Number : " ));
let b = Number(prompt("Enter Second Number : "));

console.log("a && b ---> " +(a&&b));
console.log("a || b ---> " +(a||b));
console.log("!(a > b) ---> " +!(a>b));
