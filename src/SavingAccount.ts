import { BankAccount } from "./BankAccount";

export class SavingAccount extends BankAccount{
    private interestRate : number
    constructor (accountNumber:number , balance:number, ownerName:string,interestRate:number){
        super(accountNumber,balance,ownerName)
        this.interestRate = interestRate
    }
      
        public interest ():void{
            const interest = this.getBalace() * this.interestRate
             this. deposit(interest)        
            console.log(`Interest : ${this.interestRate}, new Interest ${this.getBalace}`)
        }
}