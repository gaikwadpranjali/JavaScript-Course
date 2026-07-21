const prompt = require("prompt-sync")();

let i = Number(prompt("Enter a Number : "));
let j = Number(prompt("Enter Second Number :"));

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log("i = " + i + ", j = " + j);
  }
}
