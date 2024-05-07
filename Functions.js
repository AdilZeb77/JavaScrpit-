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
