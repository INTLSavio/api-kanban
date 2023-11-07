import { PrismaCardsRepository } from '../../../repositories/prisma/prisma-cards-repository';
import { FindByAssignedIdCardUseCase } from '../../cards/findByAssignedId';

export function makeFindByAssignedIdUseCase() {
    const cardsRepository = new PrismaCardsRepository();
    const findByAssignedIdUseCase = new FindByAssignedIdCardUseCase(cardsRepository);

    return findByAssignedIdUseCase;
}