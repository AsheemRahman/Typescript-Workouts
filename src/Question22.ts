let arr1 : number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let arr2 :number[][] = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

function displayArray(arr:number[][]):void {
    for(let row of arr){
        console.log(row.join(" "));
    }
}

function addArray(arr1:number[][],arr2:number[][]):number[][]{
    let res:number[][] = [];
    for(let i=0;i<arr1.length;i++){
        res[i] = [];
        for(let j=0;j<arr1.length;j++){
            res[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return res
}

displayArray(arr1)
displayArray(arr2)

let result = addArray(arr1,arr2)
displayArray(result)


export {}