"use strict"; //treats all code as newer verision 
// not really needed as it is by default now

//alert(3+3) //this works on browser not when u are running on node

let age = 22
let fname = "Pranjal"
let isLoggedIn = false
let temp = null
let state;
// Primitive Datatypes
//number -> 2 ^ 53
//string -> ""
//boolean -> true/false
//null -> standalone value
//undefined ->  
//symbol -> unique

// Objects
console.log(typeof null)


//symbol
const mySym = Symbol();
const myObj = {
    mySym: "key1",
    [mySym]: "key2"
}
console.log(myObj.mySym);
console.log(typeof myObj.mySym);
console.log(myObj[mySym]);
console.log(typeof myObj[mySym]);
console.log(myObj);
