function countVowels(str) {
    let splitStr = str.toLowerCase().split("");
    let counter = 0;
    for(let i = 0 ; i < splitStr.length; i++){
        if (splitStr[i] == "a" || splitStr[i] == "e" || splitStr[i] == "i" || splitStr[i] == "o" || splitStr[i] == "u" ) {
        counter ++;
        }
    }
    console.log("There are " + counter + " vowels in the string");
    
}
countVowels("hello")