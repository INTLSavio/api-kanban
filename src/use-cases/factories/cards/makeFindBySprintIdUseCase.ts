import { PrismaCardsRepository } from '../../../repositories/prisma/prisma-cards-repository';
import { FindBySprintIdCardUseCase } from '../../cards/findBySprintId';

export function makeFindBySprintIdUseCase() {
    const cardsRepository = new PrismaCardsRepository();
    const findBySprintIdUseCase = new FindBySprintIdCardUseCase(cardsRepository);

    return findBySprintIdUseCase;
}