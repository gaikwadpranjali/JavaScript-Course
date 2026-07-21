//Hollow Square Pattern

const n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    //check if it's the first /last row OR first/last column
    if (i === 1 || i === n || j === 1 || j === n) {
      row += "*";
    }else{
        row += " ";//Single space to align with "*"
    }
  }
  console.log(row);
}
