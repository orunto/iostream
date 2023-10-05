import { Space } from "nobox-client";
import { createRowSchema } from "../config";

interface User {
    email: string;
    password: string;
    firstName: string;
    age: string;
}

export const UserStructure: Space<User> = {
    space: "User",
    description: "A Record Space for Users",
    structure: {
        email: {
            description: "oruntoeniola@gmail.com",
            type: String,
            required: true
        },
        password: {
            description: "12345",
            required: true,
            type: String,
            hashed: true
        },
        firstName: {
            description: "Eniola",
            required: true,
            type: String,
        },
        age: {
            description: "22",
            required: false,
            type: Number,
        }
    }
}
const UserModel = createRowSchema<User>(UserStructure)

export default UserModel