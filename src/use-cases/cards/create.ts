import { Card } from '@prisma/client';

import { CardsRepository } from '../../repositories/cards-repostory';

interface CreateCardUseCaseRequest {
    title: string;
    description: string;
    pontuation: number;
    groupId: string;
    groupName: string;
    authorId: string;
    authorName: string;
    assignedId: string;
    assignedName: string;
    sprintId: string;
    sprintNumber: number;
}

interface CreateCardUseCaseResponse {
    card: Card;
}

export class CreateCardUseCase {
    constructor(private cardsRepository: CardsRepository) {}

    async execute({
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
    }: CreateCardUseCaseRequest): Promise<CreateCardUseCaseResponse> {

        const card = await this.cardsRepository.create({
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

        return {
            card
        }
    }
}