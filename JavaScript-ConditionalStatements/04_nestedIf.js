const prompt = require("prompt-sync")();

let a = Number(prompt("Enter Your Age : "));
let hasvoterId = true ;

if(a >= 18 ){
    if(hasvoterId){
        console.log("You are Eligible to Participate in Election!!");
    }
}