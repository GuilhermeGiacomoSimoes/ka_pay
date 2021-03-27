import { Module } from '@nestjs/common';
import { V1Controller } from './v1.controller';
import { V1HealthController } from './health/v1.health.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  controllers: [V1Controller, V1HealthController],
})
export class V1Module {}
