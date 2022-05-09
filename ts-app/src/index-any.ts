//any : you can assign any type of value

let a: any = 10
console.log(`a ${a}`)
a = 'Hello'
console.log(`a ${a}`)
a = true
console.log(`a ${a}`)

let str:any = "Hello"
console.log(str.toUpperCase())