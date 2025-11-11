import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/controllers/user.controller';
import { UserService } from './application/user.service';
import { UserPort } from './domain/ports/user.port';


@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserPort,   // la abstracción
      useClass: UserService, // la implementación concreta
    },
  ],
})
export class AppModule {}
