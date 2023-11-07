import { Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { CardsRepository } from '../cards-repostory';

export class PrismaCardsRepository implements CardsRepository {

    async create(data: Prisma.CardCreateInput) {
        const card = await prisma.card.create({
            data
        });

        return card;
    }

    async list() {
        const cards = await prisma.card.findMany();

        return cards;
    }

    async findByAuthorId(authorId: string) {
        const cards = await prisma.card.findMany({
            where: {
                authorId
            }
        });

        return cards
    }

    async findByGroupId(groupId: string) {
        const cards = await prisma.card.findMany({
            where: {
                groupId
            }
        });

        return cards
    }

    async findBySprintId(sprintId: string) {
        const cards = await prisma.card.findMany({
            where: {
                sprintId
            }
        });

        return cards
    }

    async findByAssignedId(assignedId: string) {
        const cards = await prisma.card.findMany({
            where: {
                assignedId
            }
        });

        return cards
    }
}