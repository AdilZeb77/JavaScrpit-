// Function are block of code that is used when we need repitation in code

function addNumber() {
  console.log(2 + 4);
}

addNumber();
addNumber();
addNumber();

// parameters in functions
// when we need any data in the form of input then we use parameters ;

function fruitProcessor(apple, oranges) {
  const juice = `juice with ${apple} Apples and ${oranges} oranges`;

  return juice;
}

const appleOrangeJuice = fruitProcessor(5, 3);
console.log(appleOrangeJuice);

const AppleOrangeJuices2 = fruitProcessor(10, 2);
console.log(AppleOrangeJuices2);

// Function Decleration / function Expression

//function Declertaion
function agecalc(birthyear) {
  const age = 2024 - birthyear;
  return age;
}

const finalAge = agecalc(2000);
console.log(`${finalAge} is Your Real Age`);

//Function expression

const retirement = function agecalc(birthyear) {
  const age = 2024 - birthyear;
  const retage = 65 - age;

  return `You retires in ${retage} years`;
};
console.log(retirement(2000));
