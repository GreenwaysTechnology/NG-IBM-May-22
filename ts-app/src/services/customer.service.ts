import { Customer } from "../types/customer.type";


export class CustomerService {

    public findAll(): Array<Customer> {
        return [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
    }
}