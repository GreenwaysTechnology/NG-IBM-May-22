
class Customer {
    //instance variables
    id: number = 0
    name: string = "default"
    status: boolean = true

    //constructor
    constructor(){
        console.log('constructor is called')
    }

    //instance methods
    calculate(qty: number = 0, price?: number): number {
        return qty * price
    }
}
//create instance
//customer is reference variable
//new is memory allocation operator
//Customer()  is constructor call
let customer = new Customer();
console.log(`id: ${customer.id} name ${customer.name} status ${customer.status} ${customer.calculate(200,2000)}`)