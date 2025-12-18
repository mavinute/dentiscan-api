import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';

import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

// -- Rotas de User --
router.post('/users', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);
router.get('/me', ensureAuthenticated, new DetailsUserController().handle);


export { router };