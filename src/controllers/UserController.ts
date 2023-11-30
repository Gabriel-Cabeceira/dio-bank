import { Request, Response } from "express";
import { UserService } from "../services/UserService";




export class UserController {

    userService: UserService

    constructor(userService = new UserService()){
        this.userService = userService;
    }

    createUser = (req: Request, res: Response) => {
        const userService = new UserService();
        const user = req.body

        if(!user.name){
            return res.status(400).json({message: 'Nome obrigatório'})
        } else if (!user.email){
            return res.status(400).json({message: 'Email obrigatório'})
        } else {
            this.userService.createUser(user.name, user.email);
            return res.status(201).json({message: 'Usuário criado com sucesso'})
        }
    }

    getAllUsers = (req: Request, res: Response) => {
        const userService = new UserService();

        const users = this.userService.getAllUsers();
        return res.status(200).json(users);
    }

    deleteUser = (req: Request, res: Response) => {
        const userService = new UserService();
        const userToDelete = req.body
        const user = this.userService.deleteUser(userToDelete.email);

        if(!user){
            return res.status(404).json({message: 'Usuário não encontrado'})
        }

        return res.status(200).json({message: 'Usuário deletado com sucesso'})
    }
}