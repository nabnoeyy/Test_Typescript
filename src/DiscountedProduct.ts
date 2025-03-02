import { Product } from "./Product";

export class DiscountedProduct extends Product{
 
    private discount : number
    constructor(id:number,name:string,price:number,quantity:number,discount:number){
        super(id,name,price,quantity)
        this.discount = discount
    }

    public totalDiscount():number{
     return (this.getPrice()*this.getQuantity()*this.discount)/100;
      
    }
    public getDiscountPrice():number{
        return (this.getPrice()*this.getQuantity()) - this.totalDiscount();
    }

 
}