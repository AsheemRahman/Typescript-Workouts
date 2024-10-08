class Car {
    name:string
    mileage:number
    max_speed:number
    constructor(name:string,mileage:number,max_speed:number){
        this.name = name,
        this.max_speed = max_speed
        this.mileage = mileage
    }
}

const car1  = new Car('BMW',30,100)
console.log(car1)