//js types
//strings : "" or '',``(back tick)
let firstName = "Subramanian"
let lastName = 'Murugan'
//show
let fullName = firstName + lastName // concation
//concatnation
console.log("Your Name " + fullName) // + for string concatnation
console.log("Your Name ", fullName)
//using back tick : string inter polation.
fullName = `${firstName} ${lastName}`
console.log(`Your Name ${fullName}`)

//use case of `` and string interpolation: multi strings

//traditional model
let style = "background { color: red }" +
    "container { width : 100 }" +
    "panel {width : 1000}"

let width = 1000
let newStyle = `
     background { color: red }
     container { width : ${width} }
     panel {width : ${width} }
    `
console.log(newStyle)
//numbers : number type and its size is 64 bit -double
let qty = 100
let price = 900
let totalPrice = qty * price
console.log(`Total Price ${totalPrice}`)

//booleans : true or false
let isActive = true;
console.log(`IsActive ${isActive}`)

//undefined : variable is declared but no valid value(literal) is assigned

let a; // undefined

console.log(`a ${a}`)

//NaN -  Not a Number :Error Code : Runtime error, due to numerical computation failers
//Use case -1 : if you do compuation against undefined values

let i; //undefined
let j = 100 //100 value
let r = i * j // undefined * value => NaN
console.log(`Result ${r}`)

//Use case 2: during type conversion - string to number conversion.

let x = "100" //here value is 100 but type is string
let y = 100
//Type conversion:implicit type conversion
let z = x * y  // here js converts string into number automatically: implicit type conversion
console.log(`The Result is ${z}`)
//Type conversion:Explicit type conversion using parseMethods
z = parseFloat(x) * y  // here js converts string into number automatically: implicit type conversion
console.log(`The Result is ${z}`)

//Type conversion:Explicit type conversion using unary + operator
z = +x * y  // here js converts string into number automatically: implicit type conversion
console.log(`The Result is ${z}`)

//Type conversion:Explicit type conversion using Number function
z = Number(x) * y  // here js converts string into number automatically: implicit type conversion
console.log(`The Result is ${z}`)

//Type conversion and NaN
let p = "$1000"
// let t = p *100 //here type conversion fails so that we get error
// let t = parseFloat(p) *100 //here type conversion fails so that we get error
// let t = +(p) *100 //here type conversion fails so that we get error
let t = Number(p) * 100 //here type conversion fails so that we get error

console.log(`The Result is ${t}`)

//infinity
let cost = 100;
let avg = cost / 0
console.log(`Average Cost ${avg}`) //Infinity