// quiz Program using Mapsma

const question = new Map([
  ["Question", "what is most popular programing language"],
  [1, "C"],
  [2, "C++"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct :)"],
  [false, "Try Again"],
]);
const answer = 3;
console.log(question.get("Question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`${key}  & ${value}`);
  }
}
console.log(question.get(question.get("correct") === answer));
