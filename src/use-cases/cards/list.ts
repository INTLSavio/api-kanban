import { Card } from '@prisma/client';

import { CardsRepository } from '../../repositories/cards-repostory';

interface ListCardUseCaseResponse {
    cards: Card[];
}

export class ListCardUseCase {
    constructor(private cardsRepository: CardsRepository) {}

    async execute(): Promise<ListCardUseCaseResponse> {

        const cards = await this.cardsRepository.list();

        if(!cards) {
            throw new Error('Cards not found')
        }

        return {
            cards
        }
    }
}