import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Mi API de ejemplo')
    .setDescription('Documentación de endpoints')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Ruta donde se verá Swagger
  SwaggerModule.setup('scalar', app, document);

  await app.listen(3000);
}
bootstrap();
