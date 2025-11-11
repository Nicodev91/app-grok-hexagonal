import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserPort } from 'src/domain/ports/user.port';
import { User } from 'src/domain/entities/user.entity';
import { CreateUserDto } from 'src/infrastructure/dto/create-user.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private readonly userPort: UserPort) {}

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo usuario' })
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        const id = Date.now().toString();
        const user = new User(id, createUserDto.email, createUserDto.password);
        return this.userPort.createUser(user);
    }

    @Get(':email')
    @ApiOperation({ summary: 'Obtener un usuario por su email' })
    async getUserByEmail(@Param('email') email: string): Promise<User | null> {
        return this.userPort.findByEmail(email);
    }
}