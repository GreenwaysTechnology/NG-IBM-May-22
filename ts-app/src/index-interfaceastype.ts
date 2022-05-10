
interface Locator {
    lat?: number //optional properties
    lng?: number
}

let userlocation: Locator = {
    lat: 19999
}

let productLocation:Locator = {
    lat: 19999
}
//class as a type
interface Props {
    id: number;
    url: string;
    className?: string;
    target?: string;
    varient?: "dark" | "light" 
}
let newProps: Props = {
    id: 1,
    url: 'http://wwww.example.com',
    varient: "dark"
}

interface Person {
    id: number;
    name: string;
    address: {
        city: string
        state?: string
        country?: string
    } | null,
    status?: boolean
    gender?: 'Male' | 'Female' | 'Thrid'
}

let customer: Person = {
    id: 1,
    name: 'Ram',
    address: {
        city: 'Coimbatore'
    },
    gender: 'Male'
}