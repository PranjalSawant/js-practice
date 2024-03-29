let date = new Date()
console.log(date);
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.getTime());
console.log(typeof date); //type -> object

let dday = new Date(2002, 0, 7) //its an array so the 1st month is 0
let bday = new Date("2002-01-07") //its string
console.log(dday);
console.log(bday);


//string interpolation => `backticks`