const prompt =require("prompt-sync")();

let a = Number(prompt("Enter a Number : "));
let b = Number(prompt("Enter Second Number :"));

console.log("A > B ----> " +(a>b));
console.log("A < B ----> " +(a<b));
console.log("A === B ----> " +(a===b));
console.log("A == B ----> " +(a==b));
console.log("A >= B ----> " +(a>=b));
console.log("A <= B ----> " +(a<=b));

