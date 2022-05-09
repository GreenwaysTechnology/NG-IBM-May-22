
//name is arg , here name type becomes implicitly any
//this is implicit any ; not recommended
// function sayGreet(name){
//    return name
// }
//this is explicit any : recommended
function sayGreet(name: any) {
   return name
}

console.log(sayGreet('Subramanian'))
console.log(sayGreet(100))
console.log(sayGreet(true))
//if you only strong typing

function sayHai(name: string) {
   return `hai ${name}`
}
console.log(sayHai('Subramanian'))
// console.log(sayHai(100))
// console.log(sayHai(true))

//return type : impliciltly return type is infered based on return value

// function getValue(){
//    return 10
// }

//return type : explicit return type is can be reprsented here
function getValue(): number {
   //return true
   return 10
}
console.log(getValue())