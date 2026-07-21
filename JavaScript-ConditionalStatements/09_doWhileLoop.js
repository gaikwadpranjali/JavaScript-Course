const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a Number : "));

do{
    console.log(a);
    a++;
}while(a <= 20);