
const person = {
   fullname: "Abhishek Gupta",
   age: 23,
   language :"",
   set lang(lang){
      this.language = lang;
   }

}
person.lang = "en"
console.log(person.language)