
class Customer {
    //instance variables 
    public id: number
    public name: string
    public status: boolean
    //constructor args are called local variables
    constructor(id: number = 0, name: string = "default", status: boolean = false) {
        //this keyword is used to access instance variables
        this.id = id;
        this.name = name;
        this.status = status
    }

    //instance methods
    public calculate(qty: number = 0, price?: number): number {
        return qty * price
    }
}
let customer = new Customer();
console.log(`id: ${customer.id} name ${customer.name} status ${customer.status} ${customer.calculate(200, 2000)}`)


customer = new Customer(23, "Ram", true);
console.log(`id: ${customer.id} name ${customer.name} status ${customer.status} ${customer.calculate(200, 2000)}`)