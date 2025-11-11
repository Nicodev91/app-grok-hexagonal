import { Injectable } from '@nestjs/common';
import { UserPort } from 'src/domain/ports/user.port';
import { User } from 'src/domain/entities/user.entity';

@Injectable()
export class UserService implements UserPort {
    private users = new Map<string, User>();

    async createUser(user: User): Promise<User> {
        this.users.set(user.email, user);
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.users.get(email) || null;
    }
}

