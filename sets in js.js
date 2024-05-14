// sets are dataStructure that is used to remove dupicate data from itteralbes like arrays string ,

const uniqueitem = new Set([
  "garlic",
  "onion",
  "garlic",
  "bread",
  "cheeze",
  "cheeze",
]);

console.log(uniqueitem);

// Different methods in sets
//add : we use this method to add values
//has : we use this method to check either value is inside the set or not
//delete : this method is used to check the certain element is present inside the set or not
//loop over arrays  : we can loop over the set to get the elements

uniqueitem.add("slat");
console.log(uniqueitem);

uniqueitem.has("garlic");
console.log(uniqueitem);

uniqueitem.delete("onion");
console.log(uniqueitem);

//loop over the set
for (const data of uniqueitem) {
  console.log(data);
}
