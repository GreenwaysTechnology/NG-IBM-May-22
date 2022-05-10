//steps : 1. write decorator

function Course(subject: string) {
    //inner function
    return function (target: any) {
        //inject course information into target(on which object this decorator has been decorated)   
        Object.defineProperty(target.prototype, "subject", { value: subject})
    }
}

//steps : 2. How to decorate - on class,on method, on field

@Course("React")
class Student {
    constructor(public firstName: string = "", public lastName: string = "") { }
}


let student = new Student("Subramanian", "Murugan") as any


console.log(`${student.firstName} ${student.lastName} is learning ${student.subject}`)