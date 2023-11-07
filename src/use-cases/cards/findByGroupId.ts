import { Card } from '@prisma/client';

import { CardsRepository } from '../../repositories/cards-repostory';

interface FindByGroupIdCardUseCaseRequest {
    groupId: string;
}

interface FindByGroupIdCardUseCaseResponse {
    cards: Card[];
}

export class FindByGroupIdCardUseCase {
    constructor(private cardsRepository: CardsRepository) {}

    async execute({ groupId }: FindByGroupIdCardUseCaseRequest): Promise<FindByGroupIdCardUseCaseResponse> {

        const cards = await this.cardsRepository.findByGroupId(groupId);

        if(!cards) {
            throw new Error('Cards not found')
        }

        return {
            cards
        }
    }
}