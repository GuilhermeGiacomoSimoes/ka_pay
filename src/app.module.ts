import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [V1Module, TerminusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
