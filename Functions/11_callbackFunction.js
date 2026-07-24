// A function passed as an argument to another function. 

function greet(name) { 
console.log("Hello " + name); 
} 
function processUser(callback) { 
callback("Pranjali !!"); 
} 
processUser(greet);