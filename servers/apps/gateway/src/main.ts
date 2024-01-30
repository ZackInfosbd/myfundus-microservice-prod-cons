import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const PORT = process.env.PORT || 5000;

  await app.listen(`${PORT}`);
  logger.log(`API Gateway listening on port ${PORT} 🚀`);
}
bootstrap();
