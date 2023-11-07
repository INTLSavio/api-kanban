import { Router } from 'express';
import { usersRoutes } from '../http/controllers/users/routes';

export const routes = Router();

routes.use('/users', usersRoutes);