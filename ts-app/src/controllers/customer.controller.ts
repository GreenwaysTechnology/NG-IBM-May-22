import { CustomerService } from "../services/customer.service";
import { Customer } from "../types/customer.type";
import {Config} from '../decorators/customer.decorator'

@Config({city:'Coimbatore'})
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    public init() {
        let customers: Array<Customer> = this.customerService.findAll()
        customers.forEach(customer => {
            console.log(`Id ${customer.id} Name ${customer.name}`)
        })
    }
}

