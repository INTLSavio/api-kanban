import { PrismaCardsRepository } from '../../../repositories/prisma/prisma-cards-repository';
import { ListCardUseCase } from '../../cards/list';

export function makeListUseCase() {
    const cardsRepository = new PrismaCardsRepository();
    const listUseCase = new ListCardUseCase(cardsRepository);

    return listUseCase;
}