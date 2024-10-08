
"4. Write a program to check whether a student has passed or failed in a subject after he      or she enters their mark (pass mark for a subject is 50 out of 100)."
"Program should accept an input from the user and output a message as “Passed” or “Failed” "


import * as readline from 'readline-sync';

let mark : number = Number(readline.question('Enter your score'));

if(mark>=50){
    console.log('Passed');
}else{
    console.log('Failed');
}