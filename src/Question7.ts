
"7. Write a program to print the multiplication table of given numbers."
"Accept an input from the user and display its multiplication table"



import * as readline from "readline-sync";

let number: number = Number(readline.question("enter a number"));

for (let i: number = 1; i <= 10; i++) {
    console.log(i, "*", number, "=", i * number);
}