// 3 wasy to reverse a string

// 1 - Use Split Reverse Join 

function reverseString(str){
    console.log(str.split("").reverse().join(""));
}
reverseString("hello");


// 2 - using a reverse for loop
function reverseString2(str){
    let newStr = "";
    for(let i = str.length-1; i >= 0; i--){
        newStr += str[i]; 
    }
    console.log(newStr);
}
reverseString2("world");

// 3 - using recurrsion
function reverseString3(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(0)) + str.charAt(0);
  }
  reverseString3("javascript");