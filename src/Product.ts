export class Product {
    private readonly id:number
    protected name:string
    private price:number
    private quantity : number


    constructor (id:number,name:string,price:number,quantity:number) {
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    public getID():number{
      return this.id
    }

    public getName():string{
        return this.name
    }

    public getPrice():number{
        return this.price
    }

    public setPrice(price:number):void{
       this.price=price

    }

    public getQuantity():number{
        return this.quantity
    }



    


}

