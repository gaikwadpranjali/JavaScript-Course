const prompt = require("prompt-sync")();

let a  = Number(prompt("Enter a Number : "));

for(a ; a += 2 ; a++ ){
    console.log(a);
}