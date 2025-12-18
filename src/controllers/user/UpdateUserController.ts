import { Request, Response } from 'express';

import { UpdateUserService } from '../../services/user/UpdateUserService';

class UpdateUserController {
    async handle(req: Request, res: Response){
        const { name, address, phone } = req.body;
        const userId = req.userId;

        const updateUserService = new UpdateUserService();

        const user = await updateUserService.execute({
            userId,
            name,
            address,
            phone
        });

        return res.json(user);
    }
}

export { UpdateUserController }