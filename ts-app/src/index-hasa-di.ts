//has -a 

//service layer

class OrderService {
    constructor() {

    }
    public findAll() {
        return "findAll Orders"
    }
}
//controller
// class OrderController {
//     //has-a : dependency
//     private orderservice: OrderService;
//     constructor(orderService: OrderService) {
//         this.orderservice = orderService
//     }
//     //instance method
//     public init() {
//         let orderinfo = this.orderservice.findAll()
//         console.log(orderinfo)
//     }
// }

class OrderController {
    constructor(private orderService: OrderService) { }
    //instance method
    public init() {
        let orderinfo = this.orderService.findAll()
        console.log(orderinfo)
    }
}
//main
// let orderService = new OrderService()
// let orderCtrl = new OrderController(orderService)
let orderCtrl = new OrderController(new OrderService())
orderCtrl.init()



