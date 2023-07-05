import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    logger.log('Gateway Application started successfully');
  } catch (error) {
    logger.error(`Failed to start Gateway application: ${error.message}`);
    process.exit(1);
  }
}

bootstrap();
