import { User } from '../entities/user.entity';

export abstract class UserPort {
    abstract createUser(user: User): Promise<User>;
    abstract findByEmail(email: string): Promise<User | null>;
}