//steps : 1. write decorator

type CourseType = {
    courseId: number
    name: string
    duration?: string
    trainer?: string
}

function Course(course: CourseType) {
    return function (target: any) {
        Object.defineProperty(target.prototype, "course", { value: course })
    }
}

//steps : 2. How to decorate - on class,on method, on field

@Course({ courseId: 1, name: 'Angular', duration: '40hrs', trainer: 'Subramanian' })
class Student {
    constructor(public firstName: string = "", public lastName: string = "") { }
}


let student = new Student("Subramanian", "Murugan") as any


console.log(`${student.firstName} ${student.lastName} is learning ${student.course.courseId}- ${student.course.name} ${student.course.trainer}`)