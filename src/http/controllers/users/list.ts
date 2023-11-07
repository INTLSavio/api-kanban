import { Request, Response } from 'express';

import { makeListUsersUseCase } from '../../../use-cases/factories/users/makeListUseCase';

export async function list(req: Request, res: Response) {
    
    const listUsersUseCase = makeListUsersUseCase();

    try {
        const { users } = await listUsersUseCase.execute();

        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).send();
    }
}