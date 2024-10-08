
"Write a program to find the simple interest."
"Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)"


import * as readline from 'readline-sync';

let amount:number= Number(readline.question('Enter the principle amount'));
let interest:number= Number(readline.question('Enter the interest rate'));
let years:number= Number(readline.question('Enter the number of years'));

let si= (amount*interest*years)/100
console.log(si)