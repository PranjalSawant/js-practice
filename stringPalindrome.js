function palindrome(str){
    let str1 = str.split("");
    let newStr = "";
    for(let  i  = str1.length - 1; i >= 0 ; i-- ){
        newStr+= str1[i];
    }
    console.log(newStr);
    // let newStr1 = newStr.split("");
    if (str == newStr ) {
        console.log("is a palindrome")
    }else{
        console.log("not a palindrome");
        
    }
}
palindrome("kadak")