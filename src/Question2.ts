
"2.Accept two inputs from the user and output their sum"

import * as readline from 'readline-sync';

let num : number = Number(readline.question('enter first number'));
let num1 : number = Number(readline.question('Enter second number'));

let sum:number= num + num1;

console.log(sum)