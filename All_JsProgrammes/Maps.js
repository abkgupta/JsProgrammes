const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set("oranges", 100);

// fruits.forEach(fu)

for (const x of fruits.entries()) {
    // text += x;
    console.log(x)
  }