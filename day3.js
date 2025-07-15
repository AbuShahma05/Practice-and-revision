const car = {
    car : "creta",
    brand : "Hyundai",
    model : "Xyz"
}
console.log(car.model);

const person = {}

person.firstname = "someone"
person.lastname  = "else"
person.age = 23
console.log(person.age);

const person1 = {
  firstName: "hello",
  lastName : "someone",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
const x = person;
x.id = 11
console.log(x);


let myobj = {
    firstname : "Abu",
    lastname : "Shahma",
    carname : {
       name : "Bmw",
       name2 : "Hyundai",
       name3 : "Toyota",
       name4 : "Tata"
    }
}

console.log(myobj.carname.name4);
