class Lib {
    constructor(
        public title:string,
        public author:string,
        public readingStatus:boolean
    ){}

    displayStatus(){
        if(this.readingStatus){
            console.log('already read the book')
        }else{
            console.log('need to read the book')
        }
    }
}

let obj1 = new Lib('Bill Gates','The Road ahead',true)
let obj2 = new Lib('Steve Jobs','Walter Issacson',false)

let libary : Lib[] = [obj1,obj2]

console.log(libary)
obj1.displayStatus()
obj2.displayStatus()
