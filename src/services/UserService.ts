export interface User {
    name: string
    email: string
}


// Simulated Data Base
const db = [
    {
        name: "gabriel",
        email: "gabriel@dio.com"
    },
    {
        name: "Aline",
        email: "aline@dio.com"
    }
]

export class UserService {

    db: User[] = [
        {
            name: "Teste da Silva",
            email: "test@dio.com"
        }
    ]

    constructor(database = db){
        this.db = database
    }

    // Function that create users in Data Base
    createUser = (name: string, email: string): boolean => {
        const user = {
            name,
            email
        }
        this.db.push(user);
        return true;
    }

    // Funcion that get all users in Data Base
    getAllUsers = () => {
        return this.db
    }

    // Functions taht delete users from Data Base
    deleteUser = (email: string): boolean | undefined => {
        const userIndex = this.db.findIndex(user => user.email === email);
        let deleted = false

        if(userIndex !== -1){
            deleted = true;
            if(deleted){
                this.db.splice(userIndex, 1);
                return deleted;
            }
        } else {
            return deleted;
        }
    }
}