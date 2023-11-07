import { Card } from '@prisma/client';

import { CardsRepository } from '../../repositories/cards-repostory';

interface FindByAuthorIdCardUseCaseRequest {
    authorId: string;
}

interface FindByAuthorIdCardUseCaseResponse {
    cards: Card[];
}

export class FindByAuthorIdCardUseCase {
    constructor(private cardsRepository: CardsRepository) {}

    async execute({ authorId }: FindByAuthorIdCardUseCaseRequest): Promise<FindByAuthorIdCardUseCaseResponse> {

        const cards = await this.cardsRepository.findByAuthorId(authorId);

        if(!cards) {
            throw new Error('Cards not found')
        }

        return {
            cards
        }
    }
}