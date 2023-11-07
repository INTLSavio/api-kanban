import { Request, Response } from 'express';

import { z } from 'zod';
import { makeCreateUserUseCase } from '../../../use-cases/factories/users/makeCreateUseCase';

export async function create(req: Request, res: Response) {
    const createUserBodySchema = z.object({
        email: z.string(),
        name: z.string(),
        password: z.string()
    });

    const { email, name, password } = createUserBodySchema.parse(req.body);

    const createUserUseCase = makeCreateUserUseCase();

    try {
        await createUserUseCase.execute({
            email,
            name,
            password
        });

        return res.status(200).send();
    } catch (error) {
        return res.status(400).send();
    }
}