export class Car{
    private readonly brand : string
    private speed : number
 

    constructor (brand:string,speed:number){
        this.brand = brand
        this.speed = speed
        
    }

    public getBrand():string{
        return this.brand
    }

    public getSpeed():number{
        return this.speed
    }


 //เร่ง
    public accelerate (amount:number):void{
    if (amount > 0){
        this.speed+=amount;
        console.log (` เร่งความเร็ว ${amount} km/hr ความเร็วปัจจุบัน ${this.speed} km/hr`)
    }else{
        console.log ("ไม่มีการเร่งค่าความเร็ว")
    }
    }

    public brake (amount:number):void{
       if (amount> 0 && amount <=this.speed){
        this.speed -= amount;
        console.log (` ลดความเร็ว:${amount} km/hr ความเร็วปัจจุบัน: ${this.speed} km/hr `)
       }else{
        console.log ("ไม่มีการเบรก")
    }
}
}