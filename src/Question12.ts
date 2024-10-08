
"12. Write a program to sort an array in descending order"
"Program should accept and array, sort the array values in descending order and display it"



let array:number [] = [12,34,14,52,11,67];

let swap:boolean;

do{
    swap = false
    for(let i=0;i<array.length-1;i++){
        if(array[i] < array[i+1]){
            let temp:number = array[i]
            array[i] = array[i+1]
            array[i+1] = temp
            swap =true;
        }
    }
}while(swap);


console.log(array)