import { Card } from '@prisma/client';

import { CardsRepository } from '../../repositories/cards-repostory';

interface FindBySprintIdCardUseCaseRequest {
    sprintId: string;
}

interface FindBySprintIdCardUseCaseResponse {
    cards: Card[];
}

export class FindBySprintIdCardUseCase {
    constructor(private cardsRepository: CardsRepository) {}

    async execute({ sprintId }: FindBySprintIdCardUseCaseRequest): Promise<FindBySprintIdCardUseCaseResponse> {

        const cards = await this.cardsRepository.findBySprintId(sprintId);

        if(!cards) {
            throw new Error('Cards not found')
        }

        return {
            cards
        }
    }
}