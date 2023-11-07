import { Card } from '@prisma/client';

import { CardsRepository } from '../../repositories/cards-repostory';

interface FindByAssignedIdCardUseCaseRequest {
    assignedId: string;
}

interface FindByAssignedIdCardUseCaseResponse {
    cards: Card[];
}

export class FindByAssignedIdCardUseCase {
    constructor(private cardsRepository: CardsRepository) {}

    async execute({ assignedId }: FindByAssignedIdCardUseCaseRequest): Promise<FindByAssignedIdCardUseCaseResponse> {

        const cards = await this.cardsRepository.findByAssignedId(assignedId);

        if(!cards) {
            throw new Error('Cards not found')
        }

        return {
            cards
        }
    }
}