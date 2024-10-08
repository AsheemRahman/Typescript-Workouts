
"15. Write a program to accept an array and display it on the console using functions"
"Program should contain 3 functions including main() function"


let arr: number[] = [];

function getArray(num:number):number {
    return arr.push(num);
}

function displayArray(arr:number[]):number[]{
    return arr
}


getArray(1)
getArray(2)
getArray(3)
getArray(4)

console.log(displayArray(arr))

export {}