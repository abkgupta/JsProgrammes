// Call method
const person ={
    fullname: function() {
        return this.firstName + " " + this.lastName
    }
}
const person1 = {
    firstName: "John",
    lastName: "doe"
}

console.log(person.fullname.call(person1))
// console.log("sdvds")