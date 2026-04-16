import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // start the app and listen to that port 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
