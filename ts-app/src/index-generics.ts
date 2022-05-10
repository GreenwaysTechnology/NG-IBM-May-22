//array declaration

let list = [1, 2, 3, 4, "hello", true]; //here we are mixing different type
console.log(list)
//how to restrict to have only numbers : Generics <number>

//there are two syntax
// way -1
let numList: number[] = [1, 2, 3]
console.log(numList)
//way 2 : array of number
let numList2: Array<number> = [1, 2, 3]

//store list of customers

class Customer {
    id: number;
    name: string;
}
let customerList: Array<Customer> = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];
/////////////////////////////////////////////////////////////////////////////////////
                         //custom generics
//without generics
// function accept(item:string){
//    console.log(item);
// }
//accept("hello")
//accept(12)

function accept<T>(item: T) {
    console.log(item);
}
accept<string>("Hell0")
// accept<number>("Hell0")
accept<number>(100)

function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}
let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(12)


function displayType<T, U>(id: T, name: U): void {
    console.log(typeof (id) + ", " + typeof (name));
}

displayType<number, string>(1, "Steve"); // number, string
/////////////////////////////////////////////////////////////////////////////////////

class Person {
    firstName: string;
    lastName: string;

    constructor(fname:string,  lname:string) { 
        this.firstName = fname;
        this.lastName = lname;
    }
}

//T can accept only type of Person only

function display<T extends Person>(per: T): void {
    console.log(`${ per.firstName} ${per.lastName}` );
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates

// display("Bill Gates");//Compiler Error
