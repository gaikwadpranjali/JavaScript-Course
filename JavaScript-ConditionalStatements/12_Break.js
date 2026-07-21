const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a Number : "));

for(a ; a <= 25 ; a++){
    if(a == 19 ){
      break;
    }
  console.log(a);
}