class Area{
    circle(radius:number){
        return radius*Math.PI*radius
    }

    square(side:number){
        return side*side
    }

    rectangle(length:number,breadth:number){
        return length*breadth
    }
}

class MyClass extends Area {
    circle(radius: number): number {
        return super.circle(radius)
    }

    square(side: number): number {
        return super.square(side)
    }

    rectangle(length: number, breadth: number): number {
        return super.rectangle(length,breadth)
    }

}


const obj = new MyClass()
console.log(obj.square(5));
console.log(obj.rectangle(5,10));
console.log(obj.circle(10));
