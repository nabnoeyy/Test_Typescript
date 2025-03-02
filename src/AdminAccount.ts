import { UserAccount } from "./UserAccount";
export class AdminAccount extends UserAccount{

    constructor(username:string,password:string,email:string){
        super(username,password,email)
    }

    public resetPassword(user:UserAccount,newPassword:string):void{
       (user as any).password = newPassword
    }
}