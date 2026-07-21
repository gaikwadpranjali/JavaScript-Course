const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a Number : "));
let b = Number(prompt("Enter Second Number : "));

console.log("== Pre Increment == ");
console.log("++A ---> " ,++a);
console.log("++B ---> ",++b);

console.log("== Post - Increment == ");
console.log("A++ ---> " ,a++);
console.log("B++ ---> " ,b++);