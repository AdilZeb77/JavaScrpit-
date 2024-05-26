// Call apply nad Bind Method in js
const airline = {
  flightname: "Luftanza",
  flight: "LHZ32",
  book(name) {
    console.log(
      `${name} book a seat on airline ${this.flightname} Code ${this.flight}`
    );
  },
};

const seatConfirmed = airline.book;

const siws = {
  flightname: "Swis",
  flight: "LHS34",
};

const eurowings = {
  flightname: "Eurowing",
  flight: "EWxD",
};
console.log(seatConfirmed.call(siws, "Adil"));

const book = airline.book;

//bind Method

const bookEw = book.bind(eurowings);
console.log(bookEw("Adil"));

const bookswis = book.bind(siws);

console.log(bookswis("Ahmed"));

const addtax = (rate, value) => value + value * rate;

console.log(addtax(0.1, 200));

const adtax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = adtax(0.1);

console.log(addVat2(200));

const finalrate = (rate) => (value) => value + value * rate;

const rate1 = finalrate(0.1);
console.log(rate1(200));
