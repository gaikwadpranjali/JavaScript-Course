const prompt = require("prompt-sync")();

let employee = {
    Name:"Raj",
    EmployeeId : 123456789,
    Age : 27,
    Department : "Hr" ,
    Salary : 200000 ,
}

for(let e in employee){
    console.log(e + ":" +employee[e]);
}