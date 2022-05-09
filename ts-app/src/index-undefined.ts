//undefined

//implicit undefined
let a;
console.log(`a ${a}`)
a = 10
console.log(`a ${a}`)
a = "Hello"
console.log(a)

//explicit type with undefined
let b: number;
console.log(`b ${b}`)
b = 10
console.log(`b ${b}`)
// b="Hello"
// console.log(`b ${b}`)

//variables with undefined as value : implicit
let c = undefined
console.log(`c ${c}`)
c = 10;
console.log(`c ${c}`)
c =true
console.log(`c ${c}`)

let d:undefined =undefined
console.log(`d ${d}`)
// d =10; //error