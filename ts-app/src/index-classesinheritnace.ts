//class

class Account {
    protected id: number = 1000
    constructor() {
        console.log('account')
    }
    //method : overriding
    protected deposit(): number {
        return 100
    }
    // public deposit(): number {
    //     return 100
    // }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('Savings account', this.id)
    }
    //method redefining
    public deposit(): number {
        return 1000 * super.deposit()
    }
}

let sb = new SavingsAccount()
// console.log(sb.id)
console.log(sb.deposit())
