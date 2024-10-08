
"10. Write a program to interchange the values of two arrays."
"Program should accept an array from the user, swap the values of two arrays and display it on the console"



let arr1 = [10, 20, 30, 40, 50];
console.log('array 1: ', arr1);

let arr2 = [15, 25, 35, 45, 55];
console.log('array 2: ', arr2);

[arr1, arr2] = [arr2, arr1];

console.log('array 1 after swapping: ', arr1);
console.log('array 2 after swapping: ', arr2);