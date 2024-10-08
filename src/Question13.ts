
"13. Write a program to identify whether a string is a palindrome or not"
"A string is a palindrome if it reads the same backward or forward eg: MALAYALAM"
"Program should accept a string and display whether the string is a palindrome or not"



function isPalidrome(str:string):boolean {

    for(let i=0;i<str.length/2;i++){
        if(str[i]!==str[str.length-i-1]){
            return false
        }
    }

    return true
}

console.log(isPalidrome('nodon'))