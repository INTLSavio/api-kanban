import { Router } from "express";
import { PrismaUsersRepository } from "../../../repositories/prisma/prisma-users-repository";

import { verifyJWT } from "../../middlewares/verify-jwt";

import { authenticate } from './authenticate';
import { create } from './create';
import { list } from './list';

export const usersRoutes = Router();

// usersRoutes.post('/sessions', authenticate);
usersRoutes.post('/', create);
// usersRoutes.get('/',  verifyJWT, list);