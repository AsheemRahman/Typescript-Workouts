
"17. Write a menu driven program to do the basic mathematical operations such as addition, subtraction, multiplication and division (hint: use if else ladder or switch)"
"Program should have 4 functions named addition(), subtraction(), multiplication() and division()"
"Should create a class object and call the appropriate function as user prefers in the main function"



class Calci {
    add(a:number,b:number):number{
        return a+b
    }

    sub(a:number,b:number):number{
        return a-b
    }

    multi(a:number,b:number):number{
        return a*b
    }

    division(a:number,b:number):number{
        if(b==0){
            throw new Error('Invalid response')
        }else{
            return a/b
        }
    }
}


const calci = new Calci();

function calculate(operation:string,a:number,b:number){
    switch(operation){
        case 'add':
            return calci.add(a,b)
        case 'sub':
            return calci.sub(a,b)
        case 'multi':
            return calci.multi(a,b)
        case 'div':
            return calci.division(a,b)
    }
}


console.log(calculate('div',2,0))