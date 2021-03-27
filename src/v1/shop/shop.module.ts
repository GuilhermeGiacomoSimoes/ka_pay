import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';

@Module({
  controllers: [ShopController],
})
export class ShopModule {}
