const fruits = ["Banana", "Orange", "Apple", "Mango"];

// at func
// console.log(fruits.at(2))

// const arr2 = ["Emil", "Tobias", "Linus"];
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);
// console.log(children)
// console.log(arr1.concat(arr2))

// Copywithin array
const fruitss = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruitss.copyWithin(2, 0, 2);
console.log(fruitss.copyWithin(2, 0, 2))

const f = fruitss.entries();

for (let x of f) {
  console.log(x);
}