class Matrix{
    array:number[][];
    constructor(arr:number[][]){
        this.array = arr;
    }

    getArray(){
        for(let x of this.array){
            console.log(x.join(" "))
        }
    }
}

let arr:number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const m1 = new Matrix(arr)
m1.getArray()


export {}