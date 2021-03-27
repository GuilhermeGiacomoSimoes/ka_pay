import { Module } from '@nestjs/common';
import { V1Controller } from './v1.controller';
import { ShopkeeperModule } from './shopkeeper/shopkeeper.module';

@Module({
  controllers: [V1Controller],
  imports: [ShopkeeperModule]
})
export class V1Module {}
