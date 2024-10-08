let income:number;

function incomeTax(income:number):(number|string) {
    if(income <= 2_50_000){
        return 'No Tax';
    }else if(income <= 5_00_000){
        return 5*income/100
    }else if(income <= 10_00_000){
        return 20*income/100
    }else if(income <=50_00_000){
        return 30*income/100
    }

    return 0
}

console.log(incomeTax(200000))
console.log(incomeTax(500000))