"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, balance, ownerName) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownerName = ownerName;
    }
    //ฝากเงิน
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposit ${amount},new balance : ${this.balance}`);
        }
        else {
            console.log("ไม่สามารถฝากเงินได้");
        }
    }
    //การถอนเงิน
    withdraw(amount) {
        if (amount <= this.balance && amount > 0) {
            console.log(`Withdraw ${amount},new Withdraw : ${this.balance}`);
            this.balance -= amount;
        }
        else {
            ("ไม่สามารถถอนเงินได้");
        }
    }
    getBalace() {
        return this.balance;
    }
    getOwner() {
        return this.ownerName;
    }
}
exports.BankAccount = BankAccount;
