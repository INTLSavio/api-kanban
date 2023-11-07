import { PrismaCardsRepository } from '../../../repositories/prisma/prisma-cards-repository';
import { FindByGroupIdCardUseCase } from '../../cards/findByGroupId';

export function makeFindByGroupIdUseCase() {
    const cardsRepository = new PrismaCardsRepository();
    const findByGroupIdUseCase = new FindByGroupIdCardUseCase(cardsRepository);

    return findByGroupIdUseCase;
}