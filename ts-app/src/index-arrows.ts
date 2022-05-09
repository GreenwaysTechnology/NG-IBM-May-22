//arrow function : simple function which replaces es 5 anonmous functions

//es 5 function
let add = function (a: number = 0, b: number = 0) {
    return a + b
}
//
console.log(add(10, 10))
//arrow style
add = (a: number = 0, b: number = 0) => {
    return a + b
}
console.log(add(10, 10))

//if function has only one return statement : remove return and {}
add = (a: number = 0, b: number = 0) => a + b
console.log(add(10, 10))