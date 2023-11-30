import { Router } from "express";
import { UserController } from './controllers/UserController';


export const router = Router();

const userController = new UserController();


// Rota POST para criar usuários 
router.post('/user', userController.createUser);


// Rota GET para pegar os usuários no db
router.get('/user', userController.getAllUsers)


//  Rota DELETE para deletar usuários
router.delete('/user', userController.deleteUser)