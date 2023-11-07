import { User } from '@prisma/client';

import { UsersRepository } from '../../repositories/users-repository';

interface CreateUserUseCaseResponse {
    users: User[];
}

export class ListUsersUseCase {
    constructor(private usersRepository: UsersRepository) {}

    async execute(): Promise<CreateUserUseCaseResponse> {
        const users = await this.usersRepository.list();

        if(!users) {
            throw new Error('Users not found!');
        }

        return {
            users
        }
    }
}