export class UserAccount{
    private readonly username : string
    private password : string
    protected email : string

    constructor(username:string,password:string,email:string){
        this.username = username
        this.password = password
        this.email = email
    }

    public getUsername():string{
        return this.username
    }
    public getPassword():string{
        return this.password
    }
    public getEmail():string{
        return this.email
    }
    public changePassword(oldPassword:string,newPassword:string):boolean{
        if(this.password === oldPassword){
            this.password === newPassword
            return true
        }
        return false
        
    }
}