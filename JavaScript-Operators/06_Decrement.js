const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a Number : "));
let b = Number(prompt("Enter Second Number :"));

console.log("== Pre -Decrement == ");
console.log("--A ---> " ,--a);
console.log("--B ---> " ,--b);

console.log("== Post - Decrement == ");
console.log("A-- ---> " ,a--);
console.log("B-- ---> " ,b--);


