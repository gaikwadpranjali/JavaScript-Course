const prompt=require("prompt-sync")();
const num1=Number(prompt("Enter the first Number:"));

 
if(num1%2==0){
    console.log(num1+ " is even Number");
}
else{
    console.log(num1+ " is Odd Number");
}
