const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphin > scoreKoalas) {
  console.log("Dolphin win");
} else if (scoreKoalas > scoreDolphin) {
  console.log("Koalas Win");
} else if (scoreDolphin === scoreKoalas) {
  console.log("both Win");
} else {
  console.log("Match Draw");
}

// ternary Operator Is the simplest Form to write If/else Condition just using ? :  after question mark we write our if statenent
// and after : colon we write our else statement inside the code  block

const bill = 200;

const tip = bill < 250 && bill >= 50 ? bill * 0.5 : bill * 0.2;

console.log(
  ` Hi Your Bill is ${bill} and tip on bill is ${tip} TotaLBill:${bill + tip}`
);
