
" 8. Write a program to find the sum of all the odd numbers for a given limit"
"Program should accept an input as limit from the user and display the sum of all the odd numbers within that limit"
"For example if the input limit is 10 then the result is 1+3+5+7+9 = 25"



import * as readline from "readline-sync";

let num: number = Number(readline.question("Enter a Number"));

let sum: number = 0;

for (let i: number = 1; i <= num; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log('Sum of odd numbers: ', sum);