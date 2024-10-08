
"14. Write a program to add to two dimensional arrays"
"Program should accept two 2D arrays and display its sum"



let matrix1: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let martix2:number[][] = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]
let res:number[][] = [];

for(let i=0;i<matrix1.length;i++){
    res[i] = []
    for(let j=0;j<matrix1.length;j++){
        res[i][j] = matrix1[i][j] + martix2[i][j]
    }
}

console.log(res)
