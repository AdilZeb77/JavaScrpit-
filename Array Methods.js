const arr = ["a", "b", "c", "d", "e"];

// In Slice Method We Remove the element from the array but the original array does't change
console.log(arr.slice(1, 4));
console.log(arr.slice(2));
console.log(arr.slice(-1));
console.log(arr.slice(-3));
console.log(arr.slice(1, 4));
console.log(arr);
console.log(arr.slice());
console.log([...arr]);

// In this method the selected element removed and the original array changed
console.log(arr.splice(1));
console.log(arr);

//Reverse
//In this Method we reverse the array and its meutate the original array
const array = ["d", "c", "b", "a"];
console.log(array.reverse());
console.log(array);

// Concat

// In this Method we concat two array

const array1 = ["1", "2", "3"];
const array2 = ["4", "5", "6"];
console.log(array1.concat(array2));

// we also use this method

console.log([...array1, ...array2]);

// Join
//In this Method we join the array

const array3 = ["Mr", "Adil"];
console.log(array3.join("'"));

//Array At method is use to find the element at index number
const array4 = [1, 2, 3, 4, 5, 6, 7];
console.log(array4.at(2));

//loop over the Array
const numarr = [-200, 100, -300, 200, -600, -800, 700, -500, 300];

//for of loop

for (const [i, mov] of numarr.entries()) {
  console.log(mov);
  if (mov > 0) {
    console.log(`Movement ${i + 1} : ${mov} is greater then Zero`);
  } else {
    console.log(` Movement ${i + 1} : ${mov} is less then zero`);
  }
}

console.log("For Each Method");

numarr.forEach((mov, i, arr) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1} : ${mov} is greater then Zero ${arr}`);
  } else {
    console.log(`Movement ${i + 1} : ${mov} is less then zero`);
  }
});

//Map Reduce And Filter Method

const maparray = ["Adil", "Talha", "Umer", "john"];

maparray.map((data, index, arr) => console.log(index, data, arr));

const movement = [200, 244, 5, 600, 700];
const euro = 1.1;
const movementdata = movement.map((mov) => {
  return mov * euro;
});

console.log(movementdata);
