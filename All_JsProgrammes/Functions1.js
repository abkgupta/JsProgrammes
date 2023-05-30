// function myfunc(a,b)
// {
//     return a*b;
// }
// console.log(myfunc(3,3))

// const x = function (a, b) {return a * b};
// let z = x(4, 3);

// Arrow Functions
// Arrow functions allows a short syntax for writing function expressions.

// You don't need the function keyword, the return keyword, and the curly brackets.

// Example
// ES5
// var x = function(x, y) {
//   return x * y;
// }

// ES6
// const x = (x, y) => x * y;
// const x = (x, y) => { return x * y };
// console.log(x(5,5))


// function parameters
// function myfun(x,y)
// {
//     if(y == undefined)
//     y = 8
//     return x*y;
// }
// console.log(myfun(2))

// Multiple arguments
// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
//   }
  
//   let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
//   console.log(x);

  // Argument function
//   x = findMax(1, 123, 500, 115, 44, 88);

// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }
// console.log(x)
// Invoking function
(function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    console.log(max)
    return max;
  })(4,5,6)
