
export class Profile {
    id: number = 0
    name: string = ""
    status: true | false = false
    gender?: "Male" | "Female" | "Third"
    address?: {
        city: string
    } | null
}