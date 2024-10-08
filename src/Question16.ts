
"16. Write a program to check whether a given number is prime or not"
"Program should accept an input from the user and display whether the number is prime or not"



function isPrime(num:number):boolean{

    if(num <2){
        return false
    }

    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

console.log(isPrime(10))