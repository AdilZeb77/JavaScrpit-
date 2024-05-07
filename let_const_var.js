// Let const and var is used in js has  different scope level
//all of them have different diclerative prospactive

//we can re assign the value in let to the variable
//let has block level scope
let firstname = "Adil";
console.log(firstname);
firstname = "Ahmed";
console.log(firstname);

//in const we cant re assign the value to the variables
//const has function level Scope

const PI = 3.17;
console.log(PI);
PI = 4.1;
console.log(PI);

//16 we got Uncaught TypeError TypeError: Assignment to constant variable.

//in var we can reassign the value to variable
// var has its Global Scope
var age = 20;
console.log(age);

age = 10;
console.log(age);
