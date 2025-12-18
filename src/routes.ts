import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';

import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

// -- Rotas de User --
router.post('/user', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);
router.get('/me', ensureAuthenticated, new DetailsUserController().handle);
router.put('/users', ensureAuthenticated, new UpdateUserController().handle);


export { router };