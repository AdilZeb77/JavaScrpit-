//Maps is also a data Structure in js language same like an object
// in maps keys are any type insted of strings
// we can pass data using set methods and retrieve data using get method
const resturnat = new Map();
resturnat
  .set("name", "Abbottabad Resturant")
  .set("location", "Abbottabad Heights")
  .set(true, " we are opens")
  .set(false, "Sorry We are close")
  .set("open", 11)
  .set("close", 21);

//we can retrive all the values from maps
console.log(resturnat.get("name"));
console.log(resturnat.get("location"));
console.log(resturnat.get("open"));
console.log(resturnat.get(true));

// Now we can use the boolean key to get data
const time = 0;
console.log(
  resturnat.get(time > resturnat.get("open") && time < resturnat.get("close"))
);
