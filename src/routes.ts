import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';

import { CreatePatientController } from './controllers/patient/CreatePatientController';
import { DetailsPatientController } from './controllers/patient/DetailsPatientController';

import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

// -- Rotas de User --
router.post('/user', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);
router.get('/me', ensureAuthenticated, new DetailsUserController().handle);
router.put('/users', ensureAuthenticated, new UpdateUserController().handle);

// Rotas de Patient --
router.post('/patients', ensureAuthenticated, new CreatePatientController().handle);
router.get('/patients/:id', ensureAuthenticated, new DetailsPatientController().handle);

export { router };