//custom decorators(Annotations)

//steps : 1. write decorator
function Course(target:any) {
     //inject course information into target(on which object this decorator has been decorated)   
     Object.defineProperty(target.prototype, "subject", { value: 'Angular' })
}

//steps : 2. How to decorate - on class,on method, on field

@Course
class Student {
    constructor(public firstName: string = "", public lastName: string = "") { }
}

// in order to avoid that error 
//two ways : 
//1. define explicit type for student having properties

interface StudentType {
    firstName:string
    lastName:string
    subject:string
}
//2. you can skip the 

// let student = new Student("Subramanian","Murugan") as StudentType

let student = new Student("Subramanian","Murugan") as any


console.log(`${student.firstName} ${student.lastName} is learning ${student.subject}`)