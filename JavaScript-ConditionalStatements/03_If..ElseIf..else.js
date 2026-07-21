const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a Number : "));
let b = Number(prompt("Enter Second Number :"));
let c = Number(prompt("Enter Third Number: "));

if(a > b && a > c){
    console.log(a +  "Is Greater");
}
else if(b > a && b >c){
    console.log(b + "Is Greater ");    
}
else{
    console.log(c +  "Is Greater ");
}