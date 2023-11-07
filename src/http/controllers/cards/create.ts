import { Request, Response } from 'express';

import { z } from 'zod';
import { makeCreateUseCase } from '../../../use-cases/factories/cards/makeCreateUseCase';

export async function create(req: Request, res: Response) {
    const createCardBodySchema = z.object({
        title: z.string(),
        description: z.string(),
        pontuation: z.number(),
        groupId: z.string(),
        groupName: z.string(),
        authorId: z.string(),
        authorName: z.string(),
        assignedId: z.string(),
        assignedName: z.string(),
        sprintId: z.string(),
        sprintNumber: z.number()
    });

    const { 
        title,
        description,
        pontuation,
        groupId,
        groupName,
        authorId,
        authorName,
        assignedId,
        assignedName,
        sprintId,
        sprintNumber 
    } = createCardBodySchema.parse(req.body);

    const createUseCase = makeCreateUseCase();

    try {
        await createUseCase.execute({
            title,
            description,
            pontuation,
            groupId,
            groupName,
            authorId,
            authorName,
            assignedId,
            assignedName,
            sprintId,
            sprintNumber 
        });

        return res.status(200).send();
    } catch (error) {
        return res.status(400).send();
    }
}