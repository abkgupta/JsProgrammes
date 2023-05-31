// let person = {
//    fullname: "Abhishek Gupta",
//    age: 23,
//    color:"brown"
// }

// console.log(person)
// console.log(person.color)  

// 2nd way.
// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person)

// Object properties.
// let txt = ""
// for (let x in person) {
//     txt += person[x];
//     console.log(txt)
//   }

  // Object Methods
//   const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//   };
//   person.name = function() {
//     return this.firstName + " " + this.lastName;
//   };
  
 
//  console.log( "My father is " + person.name()); 

// Convert an Object to an Array in JavaScript for key

const person = {
  firstName: "Abhishek",
  lastName: "Gupta"
}

// const persar = Object.keys(person)
// console.log(persar[1])
const persar = Object.entries(person)
console.log(persar)
