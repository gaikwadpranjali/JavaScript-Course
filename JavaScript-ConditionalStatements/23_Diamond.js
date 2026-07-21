//Diamond Pattern
const n = 5;
//upper half pyramid
for (let i = 1; i <= n; i++) {
  let row = "";
  //print leading spaces
  for (let j = i; j <= n; j++) {
    //give space inside the double quotes
    row += " ";
  }
  //print stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  console.log(row);
}

//lower half (inverted pyramid)

for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = n; j > i; j--) {
    row += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }
  console.log(row);
}
