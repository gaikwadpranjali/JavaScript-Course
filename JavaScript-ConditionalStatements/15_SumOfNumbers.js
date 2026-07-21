const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a Number :"));
let sum = 0;

for(a ; a <= 50 ; a++){
    sum = sum + a;
    console.log("Sum : " +sum);
}