import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailsUserController } from './controllers/user/DetailsUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';

import { CreatePatientController } from './controllers/patient/CreatePatientController';
import { DetailsPatientController } from './controllers/patient/DetailsPatientController';

import { CreateRadiographyRequestController } from './controllers/radiographyrequest/CreateRadiographyRequestController';
import { ListReceivedRadiographyRequestsController } from './controllers/radiographyrequest/ListReceivedRadiographyRequestsController';
import { AcceptRadiographyRequestController } from './controllers/radiographyrequest/AcceptRadiographyRequestController';
import { ListReceivedAllRadiographyRequestsController } from './controllers/radiographyrequest/ListReceivedAllRadiographyRequestsController'
import { UploadRadiographyController } from './controllers/radiographyrequest/UploadRadiographyController';

import { ListRadiographsByRequestController } from './controllers/radiography/ListRadiographsByRequestController';
import { GetRadiographFileController } from './controllers/radiography/GetRadiographFileController';

import { ensureAuthenticated } from './middleware/ensureAuthenticated';
import { uploadConfig } from './config/upload';

const router = Router();

// -- Rotas de User --
router.post('/user', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);
router.get('/me', ensureAuthenticated, new DetailsUserController().handle);
router.put('/users', ensureAuthenticated, new UpdateUserController().handle);

// Rotas de Patient --
router.post('/patients', ensureAuthenticated, new CreatePatientController().handle);
router.get('/patients/:id', ensureAuthenticated, new DetailsPatientController().handle);

// Rotas de Radiography Request --
router.post('/radiography-requests', ensureAuthenticated, new CreateRadiographyRequestController().handle);
router.get('/radiography-requests/received', ensureAuthenticated, new ListReceivedRadiographyRequestsController().handle);
router.patch("/radiography-requests/:requestId/accept", ensureAuthenticated, new AcceptRadiographyRequestController().handle);
router.get('/radiography-requests/received/all', ensureAuthenticated, new ListReceivedAllRadiographyRequestsController().handle);
router.post("/radiography-requests/:requestId/upload", ensureAuthenticated, uploadConfig.single("file"), new UploadRadiographyController().handle);

// -- Rotas de Radiography --
router.get("/radiography-requests/:requestId/radiographs", ensureAuthenticated, new ListRadiographsByRequestController().handle);
router.get("/radiographs/:id/file", ensureAuthenticated, new GetRadiographFileController().handle);

export { router };