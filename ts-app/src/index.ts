import { firstName, lastName, skills, status, likes } from './util/myutil'
import { CustomerController } from './controllers/customer.controller'
import { CustomerService } from './services/customer.service'

console.log(firstName, lastName, skills, status, likes)

let ctrl = new CustomerController(new CustomerService()) as any
ctrl.init()
console.log(ctrl.ctrlinfo.city)