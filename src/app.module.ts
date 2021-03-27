import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { V1Module } from './v1/v1.module';

@Module({
  imports: [TerminusModule, V1Module],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
