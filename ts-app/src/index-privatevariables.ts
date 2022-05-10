
class Authentication {
    private userName:string;
    private password:string;

    constructor(userName?:string,password?:string){
        this.userName = userName
        this.password = password
    }

    public getUserInfo():string{
        return `${this.userName} ${this.password}`
    }
}
let auth = new Authentication("admin","admin")
/**
 * src/index.ts:11:6 - error TS2341: Property 'userName' is private and only accessible within class 'Authentication'.

11 auth.userName = 'admin'

 */
// auth.userName = 'admin'
console.log(auth.getUserInfo())