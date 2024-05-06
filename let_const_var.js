/*In let, cont ,var all of three are using for the same purpose to declared variable but all of them has different
Scope Lavel and Decleration 
*/

// In Let we can re assign the value and use when the vale is change Dinamically
//2) let have a block lavel  scope in entire Program

let name = "Adil";
console.log(name);

name = "Ahmed";
console.log(name);

//Const
// In const We Can't reassign the Value to the variable,
//Const have a function level scope

const PI = "3.14";
console.log(PI);

PI = "23.22";
console.log(PI);

//Var
//In Var we can reassign value to the variable but makes problem
//var have a Global level Scope

var lastname = "Ali";
console.log(lastname);

lastname = "akram";
console.log(lastname);
