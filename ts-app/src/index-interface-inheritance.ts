//interfaces

interface Repository {
    //only declaration
    findAll(): string;
    save(): string;
}
class OrderSQLRepository implements Repository {
    findAll(): string {
        return 'OrderSQLRepository findall'
    }
    save(): string {
        return 'OrderSQLRepository save'
    }
}
class OrderMongoRepository implements Repository {

    findAll(): string {
        return 'OrderMongoRepository findall'
    }
    save(): string {
        return 'OrderMongoRepository save'
    }

}

class OrderService {
    constructor(private repo: Repository) { }

    findAll(): void {
        console.log(this.repo.findAll())
    }
    save(): void {
        console.log(this.repo.save())
    }
}

let service = new OrderService(new OrderSQLRepository())
service.findAll();
service.save()

service = new OrderService(new OrderMongoRepository())
service.findAll();
service.save()

interface Account {
    deposit(amount: number): number
}
interface Calculator {
    calculate(amount: number): number
}

class SavingsAccount implements Account, Calculator {
    constructor() {
    }
    calculate(amount: number): number {
        return amount * 10
    }
    //overriding
    public deposit(): number {
        return 1000;
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit(),sb.calculate(111))