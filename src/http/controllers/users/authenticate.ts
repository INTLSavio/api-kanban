import { Request, Response } from 'express';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import { makeAuthenticateUseCase } from '../../../use-cases/factories/users/makeAuthenticateUseCase';

export async function authenticate(req: Request, res: Response) {
    const authenticateBodySchema = z.object({
        email: z.string().email(),
        password: z.string()
    });

    const { email, password } = authenticateBodySchema.parse(req.body);

    try {
        const authenticateUseCase = makeAuthenticateUseCase();

        const { user } = await authenticateUseCase.execute({
            email,
            password
        });

        const token = jwt.sign({}, 'kanban', {
            subject: user.id
        });

        return res.status(200).json({
            user,
            token
        });

    } catch (error){
        return res.status(400).json({
            message: 'Login Inválido'
        });
    }
}