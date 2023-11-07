import { PrismaCardsRepository } from '../../../repositories/prisma/prisma-cards-repository';
import { CreateCardUseCase } from '../../cards/create';

export function makeCreateUseCase() {
    const cardsRepository = new PrismaCardsRepository();
    const createUseCase = new CreateCardUseCase(cardsRepository);

    return createUseCase;
}