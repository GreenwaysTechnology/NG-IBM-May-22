
class Customer {
    //instance variables :hardcoded values
    id: number = 0
    name: string = "default"
    status: boolean = true

    //constructor
    constructor() {
        console.log('constructor is called')
    }

    //instance methods
    calculate(qty: number = 0, price?: number): number {
        return qty * price
    }
}
let customer = new Customer();
//init variables after object creation
customer.id = 100;
customer.name = 'subramanian'
customer.status = true
console.log(`id: ${customer.id} name ${customer.name} status ${customer.status} ${customer.calculate(200, 2000)}`)