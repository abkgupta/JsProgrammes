function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  console.log(...numbers)
  // console.log(sum(...numbers));
  // // Expected output: 6
  
  // console.log(sum.apply(null, numbers));
  // // Expected output: 6
  const obj= {
    name: "xascsc",
    age: 30,
    stream: "Elite"
  }
  const clonedObj = { ...obj };
// console.log(clonedObj)
  // console.log({...obj})    

//   let arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];

// arr1 = [...arr1, ...arr2];
// console.log(arr1)   // appends both array
// arr1 = [...arr2, ...arr1];        
// console.log(arr1); 
// const arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];

// //  Prepend all items from arr2 onto arr1
// Array.prototype.unshift.apply(arr1, arr2);
// console.log(arr1); // [3, 4, 5, 0, 1, 2]
// Object.assign() can be used to mutate an object, whereas spread syntax can't.
// const obj1 = { foo: "bar", x: 42 };
// Object.assign(obj1, { x: 1337 });
// console.log(obj1); // { foo: "bar", x: 1337 }
// const obj1 = { foo: "bar", x: 42 };
// const obj2 = { foo: "baz", y: 13 };
// const merge = (...objects) => ({ ...objects });

// const mergedObj1 = merge(obj1, obj2);
// console.log(mergedObj1)
//Array.reduce()
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const mere = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj1 = mere(obj1, obj2);
// { foo: 'baz', x: 42, y: 13 }
// console.log(mergedObj1)

// Array.reduceRight
const array1 = [[0, 1], [2, 3], [4, 5]];

const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

// console.log(result);
// Expected output: Arr
