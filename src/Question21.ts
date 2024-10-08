let arr: number[] = [1,2,3,3,4,5]

let newArray:number[] = [];

for(let i=0;i<arr.length-1;i++){
    newArray[i] = arr[i] * arr[i+1]
}

console.log(newArray)

export {}