
// class Customer {
//     //instance variables
//     public id: number 
//     public name: string 
//     public status: boolean
//     constructor(){
//         console.log('constructor is called')
//     }
// }

// class Customer {
//     //instance variables
//     public id: number
//     public name: string
//     public status: boolean
//     constructor(id: number = 0, name: string = "", status: boolean = false) {
//         this.id = id;
//         this.name = name;
//         this.status = status
//     }
// }

class Customer {
    //instance variables
    // public id: number
    // public name: string
    // public status: boolean
    //here id,name,status are local variables
    //constructor arg local variables can be converted into instance variable; by adding public or private keywords
    // constructor(public id: number = 0, public name: string = "",public status: boolean = false) {
    //     this.id = id;  
    //     this.name = name;
    //     this.status = status
    // }
    constructor(public id: number = 0, public name: string = "", public status: boolean = false) { }
}


let customer = new Customer();
console.log(`id: ${customer.id} name ${customer.name} status ${customer.status}`)

class Order {
    constructor(public id: number = 0, public value: number = 0) { }
}
let order = new Order(13,9000)
console.log(`${order.id} ${order.value}`)