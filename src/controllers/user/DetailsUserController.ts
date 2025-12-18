import { Request, Response } from 'express';

import { UserDetailsService } from '../../services/user/DetailsUserService';

class DetailsUserController {
    async handle(req: Request, res: Response){

        const userId = req.userId;

        if (!userId) {
        return res.status(401).json({ error: "Usuário não autenticado." });
        }

        const userDetailsService = new UserDetailsService();

        const user = await userDetailsService.execute(userId);

        return res.json(user);
    }
}

export { DetailsUserController };