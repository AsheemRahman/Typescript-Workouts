
"20. Write a program to print the following pattern using for loop"

// 1
// 2 3
// 4 5 6
// 7 8 9 10


let n:number = 5;
let k:number= 1;
for(let i=0;i<n;i++){
    let res =""
    for(let j=0;j<i;j++){
        res += k + " "
        k++

    }
    console.log(res)
}

export {}