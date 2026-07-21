const prompt = require("prompt-sync")();

let a = Number(prompt("Enter A Number : "));

for(a ; a <= 20 ; a++){
    if(a == 10){
        continue;
    }
  console.log(a);
}