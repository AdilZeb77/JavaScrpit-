// Logical operators has different uses in js e.g
// false values are 0, undefine , empty sting '', null

/*  logigal or operator give us truty values when the second value is false  */

const a = 10;
const b = undefined;

console.log(a || b);

console.log(b || a);

/* logical And Operator gives us first falsy value */

const c = undefined;
const d = 10;

console.log(c && d);
console.log(d && c);

/* Note :
   And operator gives a true value but in the case of 0 this operator take 0 as a falsy value 
   but in real world 0 is a truty value then we an operator called Nullish Collasing Opertaor
*/

// Nulish Collasing Operator

const e = 0;
const f = 10;

console.log(e || f);
console.log(e ?? f);
// here e=0 which is truty value
