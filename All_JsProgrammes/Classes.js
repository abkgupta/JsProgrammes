// class Myclass1{
//  constructor(name, year) {
//      this.name = name;
//      this.year = year;
//  }

//   age()
//   {
//     const date  = new Date()
//     return date.getFullYear() - this.year
//   }

// }

// const car = new Myclass1("Abhi",2014)

// console.log('My car is '+ car.age()+ ' old years')

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  console.log(myCar.show());