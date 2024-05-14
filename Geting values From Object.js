// we can't use direct for of loop into object then we use object methods
const data = {
  name: "Ahmad",
  age: 20,
  profassion: "Teacher",
};
//we access key  of the object
const datakey = Object.keys(data);
for (const datakeys of datakey) {
  console.log(datakeys);
}

// we can access the values inside the object

const datavalue = Object.values(data);

for (const datavalues of datavalue) {
  console.log(datavalues);
}

const dataentrie = Object.entries(data);

for (const dataentries of dataentrie) {
  console.log(dataentries);
}

//we can destructure both key and values

for (const [key, value] of dataentrie) {
  console.log(key, value);
}
