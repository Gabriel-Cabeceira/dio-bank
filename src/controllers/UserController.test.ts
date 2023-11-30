import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { User, UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from 'express';



describe('User controller', () => {

    const mockDb: User[] = [
        {
            "name": "Teste da Silva",
            "email": "test@dio.com"
        }
    ]
    const userService = new UserService(mockDb);

    const userController = new UserController(userService);

    it('A função createUser deve retornar que o nome é obrigatório', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'teste@teste.com'
            }
        } as Request

        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({message: 'Nome obrigatório'})
    })

    it('A função createUser deve retornar que o email é obrigatório', () => {
        const mockRequest = {
            body: {
                name: 'Teste',
                email: ''
            }
        } as Request

        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({message: 'Email obrigatório'})
    })

    it('A função createUser deve ser chamada e criar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Gabriel Cabeceira',
                email: 'gabriel@dio.com'
            }
        } as Request

        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({message: 'Usuário criado com sucesso'});
    })

    it('A função getAllUsers deve ser chamada e exibir os usuários', () => {
        const mockRequest = {} as Request
        const mockResponse = makeMockResponse();
        userController.getAllUsers(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);

        // Espera o retorno dos dois objetos pois um deles foi criado pela função anteriormente
        expect(mockResponse.state.json).toMatchObject(
            [
                {
                     name: 'Teste da Silva',
                     email: 'test@dio.com' 
                },
                { 
                    name: 'Gabriel Cabeceira',
                    email: 'gabriel@dio.com'
                }
            ]
        )
    })

    it('A função deleteUser deve ser chamada e deletar o usuário informado na requisição', () => {
        const mockRequest = {
            body: {
                email: "test@dio.com"
            }
        } as Request
        const mockResponse = makeMockResponse();
        userController.deleteUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200)
    })
})