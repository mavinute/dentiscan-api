import { Request, Response } from 'express';

import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const {name, email, password, address, phone} = req.body;

        const createUserService = new CreateUserService();

        const result = await createUserService.execute({name, email, password, address, phone});
        
        return res.json(result);
    }
}

export { CreateUserController }