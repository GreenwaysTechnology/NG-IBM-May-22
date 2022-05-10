
//literal objects and types

class Locator {
    lat?: number
    lng?: number
}
//class as type
class User {
    //optional and required : which are optional and which are mandatory
    id: number;
    name: string;
    city?: string;
    state?: string
    status?: boolean;
    location?: Locator
}
//here the compiler forces to verify the type of property and existence of property
let user: User = {
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore',
    state: 'TN',
    status: true
}

let newUser: User = {
    id: 1,
    name: 'Subramanian',
    city: 'coimbatore',
    location: {
        lat: 19999,
        lng: 89777
    }
}