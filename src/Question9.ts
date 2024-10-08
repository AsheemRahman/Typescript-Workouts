
"Write a program to print the following pattern (hint: use nested loop)"

'pattern'

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5




let pattern: string = "";

for (let i: number = 0; i <= 5; i++) {
    for (let j: number = 1; j <= i; j++) {
        pattern += j + " ";
    }
    pattern += "\n";
}

console.log(pattern);