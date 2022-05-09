//null

let emp = null
console.log(emp)
// console.log(emp.id)
// emp = {
//     id: 1
// }
//how to fix runtime error with null
//using if else
if (emp) {
    console.log(emp.id)
} else {

}
//using tenary operator
emp ? console.log(emp.id) : console.log("0");

//typescript offers more operators : safe navigation operator
console.log(emp?.id ? emp.id : 0)

//elivish operator??
console.log(emp?.id ?? 0)

// emp = {
//     id: 1
// }
// console.log(emp.id)

