import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // class-validation 수행 가능

  const config = new DocumentBuilder()
    .setTitle('cat example')
    .setDescription('cat api swagger')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // cors 에러 해결
  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(8000);
}
bootstrap();
