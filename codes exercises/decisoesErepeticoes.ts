const userType = {
    admin: 'Seja bem vindo Admin',
    student: 'Você é um estudante',
    guest: 'Você pode apenas visualizar'
}

const user = 'guest';


function validateUser(user: string){
    console.log(userType[user as keyof typeof userType])
}


validateUser(user);