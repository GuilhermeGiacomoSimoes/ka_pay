import { Module } from '@nestjs/common';
import { V1Controller } from './v1.controller';
<<<<<<< HEAD
import { V1HealthController } from './health/v1.health.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  controllers: [V1Controller, V1HealthController],
=======
import { ShopkeeperModule } from './shopkeeper/shopkeeper.module';

@Module({
  controllers: [V1Controller],
  imports: [ShopkeeperModule]
>>>>>>> 60b5c0ad03c45734e695dbffad4782f8b84e42d7
})
export class V1Module {}
