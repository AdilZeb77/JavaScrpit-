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
