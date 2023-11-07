import { Card, Prisma } from '@prisma/client';

export interface CardsRepository {
    create(data: Prisma.CardCreateInput): Promise<Card>
    list(): Promise<Card[] | null>
    findByAuthorId(authorId: string): Promise<Card[] | null>
    findByAssignedId(assignedId: string): Promise<Card[] | null>
    findBySprintId(sprintId: string): Promise<Card[] | null>
    findByGroupId(groupId: string): Promise<Card[] | null>
}