export class BankAccount {
     private readonly accountNumber : number
    //ยอดเงินคงเหลือ
    private balance : number
    //ชื่อเจ้าของ
    protected ownerName : string 
    amount: number | undefined
    

    constructor (accountNumber:number , balance:number, ownerName:string){
     this.accountNumber = accountNumber
     this.balance = balance
     this.ownerName = ownerName
    }

     //ฝากเงิน
    public deposit(amount:number):void{
        if(amount> 0 ){
        this.balance += amount
        console.log (`Deposit ${amount},new balance : ${this.balance}`);
        }else{
      console.log("ไม่สามารถฝากเงินได้")
    }
}

    //การถอนเงิน
    public withdraw(amount:number):void{
        if (amount <= this.balance && amount > 0){
            console.log (`Withdraw ${amount},new Withdraw : ${this.balance}`);
            this.balance -= amount
        }else{ ("ไม่สามารถถอนเงินได้")
}
}
 public getBalace():number{
    return this.balance
 }

 public getOwner():string{
    return this.ownerName
 }


}