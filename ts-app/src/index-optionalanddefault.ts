//default args
let add = function (a: number = 0, b: number = 0): number {
    return a + b
}
console.log(add(10, 10))
console.log(add()) //if dont pass , compiler will give error.

//optional args
let multiply = function (a?: number, b?: number): number {
    return a * b
}
console.log(multiply(10, 10))
console.log(multiply())
