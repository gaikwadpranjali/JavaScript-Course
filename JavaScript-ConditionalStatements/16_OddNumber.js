const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a Number :"));

for (a; a <= 20; a++) {
  if (a % 2 !== 0) {
    console.log(a);
  }
}
