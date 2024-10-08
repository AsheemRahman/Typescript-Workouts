let input:any;

function Result(input:any):string{
    if(isNaN(input)){
        return 'notANumberError'
    }else if(input < 10){
        return 'tinyHeight'
    }else if(input > 10){
        return 'hugeHeight'
    }
    return ""
}

input = 'seven'
console.log(Result(input))
input = 7
console.log(Result(input))
input = 100
console.log(Result(input))

export {}