//Union type

function Mode(varient: "dark" | "light") {
    console.log(varient)
}
Mode("dark")
Mode("light")
// Mode("medium")
function Person(gender: "Male" | "Female" | "Third" | undefined, active: true | false) {
    console.log(gender, active)
}
Person("Female", true)
Person("Male", false)

function PrintId(id: string | number | undefined) {
    console.log(id)
}
PrintId("1");
PrintId(1);
PrintId(undefined)

function PrintIdV2(id: string | number | undefined) {
    //console.log(id.toUpperCase())
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id.toFixed());
    }
}
PrintIdV2("abc")
PrintIdV2(124.782323)