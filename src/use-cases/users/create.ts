import { hash } from 'bcryptjs';
import { User } from '@prisma/client';

import { UsersRepository } from '../../repositories/users-repository';

interface CreateUserUseCaseRequest {
    email: string;
    name: string;
    password: string;
}

interface CreateUserUseCaseResponse {
    user: User;
}

export class CreateUserUseCase {
    constructor(private usersRepository: UsersRepository) {}

    async execute({
        email,
        name,
        password
    }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        const hashedPassword = await hash(password, 8);

        const user = await this.usersRepository.create({
            email,
            name,
            password: hashedPassword
        });

        return {
            user
        }
    }
}