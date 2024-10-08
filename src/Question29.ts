function myFilter(myArray:number[],cb:Function):number{
    return cb(myArray)
}

function sum(args:number[]):number{
    let sum:number = 0;
    for(let i=0;i<args.length;i++){
        sum+=args[i]
    }
    return sum
}

let array:number[] = [1,2,3,4,5]

console.log(myFilter(array,sum))

export {}