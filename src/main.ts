import { NestFactory } from '@nestjs/core';
import {v1Module} from './v1/application/dependency-inversion/v1.module';

async function bootstrap() {
  const app = await NestFactory.create(v1Module);
  await app.listen(3000);
}
bootstrap();
