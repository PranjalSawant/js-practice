/* 
collection of data of different types stored in a variable
non-primitive datatype 
creates shallow copies -> same ref point
*/
const Arr1 = [1,2,3,4]
const Arr2 = ["hi","hello"]
const Arr3 = new Array(1,2,3)
// console.log(Arr1);
// console.log(Arr2);
// console.log(Arr3);
// Array methods
/*
push
pop
unshift-> adds to the beginning of array
shift ->  removes from the beginning of array
includeschecks if value exists in array
indexOf
join -> joins arrays and converts it into string
slice
splice
*/
console.log(Arr1);
console.log(Arr1.slice(1,3)); // just gives the values from index 1 to 3 and does not include 3
console.log(Arr1);
console.log(Arr1.splice(1,3)); // removes the values from index 1 to 3 from the orginal array
console.log(Arr1);
