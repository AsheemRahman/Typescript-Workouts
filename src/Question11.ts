
"11. Write a program to find the number of even numbers in an array"
"Program should accept an array and display the number of even numbers contained in that array"



let arr: number[] = [1,2,3,4,5,6]

let count:number = 0;

for(let i:number=0;i<arr.length;i++){
    if(arr[i]%2==0){
        count++
    }
}

console.log(count)