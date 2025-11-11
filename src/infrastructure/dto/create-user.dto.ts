import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ description: 'Email del usuario', example: 'test@example.com' })
  email: string;

  @ApiProperty({ description: 'Contraseña del usuario', example: '1234' })
  password: string;
}
