class staticclass{
    constructor(name){
        this.name = name;
    }
   static  hello(){
        return "Hello from your friend"
    }

}
const stobj = new staticclass("Abhishek")
console.log(staticclass.hello())
// console.log(stobj.hello())    // gives error cuz obj cant call static method.