import { User, UserService } from "./UserService"


describe('UserService', () => {
    
    const mockDb: User[] = []
    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {
        const mockResponse = userService.createUser('Teste', 'test@dio.com');
        expect(mockResponse).toBe(true);
    })

    it('Deve chamar a função getAllUsers', () => {
        const mockResponse = userService.getAllUsers();
        expect(mockResponse).toMatchObject(
            [
                {
                    name: 'Teste',
                    email: 'test@dio.com'
                }
            ]
        )
    })

    it('Deve chamar a função deleteUser e deletar o usuário', () => {
        const mockResponse = userService.deleteUser('test@dio.com');
        expect(mockResponse).toBe(true);
    })

    it('Deve chamar a função deleteUser e retornar false', () => {
        const mockResponse = userService.deleteUser('test@dio.com');
        expect(mockResponse).toBe(false);
    })
})