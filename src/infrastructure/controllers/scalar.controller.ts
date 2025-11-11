// src/scalar.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('Scalar')
@Controller('scalar')
export class ScalarController {
  @Get()
  @ApiOperation({ summary: 'Suma dos números' })
  @ApiQuery({ name: 'a', type: Number })
  @ApiQuery({ name: 'b', type: Number })
  sum(@Query('a') a: number, @Query('b') b: number): number {
    return Number(a) + Number(b);
  }
}
