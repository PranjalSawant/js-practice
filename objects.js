/*
singleton -> one of a kind object made out of a constructor
Object.create
when object is made via constructor it is always singleton
otherwise literal
*/


//object literals -> way of declaring objects
const user = {
    name: "Pranjal",
    age: 22
}
// 2 ways to access obj
console.log(user.name);
console.log(user["age"]);
console.log(user)
user.name = "PS"
Object.freeze(user) // no changes in the obj are reflected after freezing it
console.log(user)
user.name = "PK"
console.log(user)