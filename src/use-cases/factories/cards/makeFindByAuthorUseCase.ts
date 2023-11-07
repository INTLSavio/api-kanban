import { PrismaCardsRepository } from '../../../repositories/prisma/prisma-cards-repository';
import { FindByAuthorIdCardUseCase } from '../../cards/findByAuthorId';

export function makeFindByAuthorIdUseCase() {
    const cardsRepository = new PrismaCardsRepository();
    const findByAuthorIdUseCase = new FindByAuthorIdCardUseCase(cardsRepository);

    return findByAuthorIdUseCase;
}