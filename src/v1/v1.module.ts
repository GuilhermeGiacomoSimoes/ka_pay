import { Module } from '@nestjs/common';
import { V1Controller } from './v1.controller';
import { ShopModule } from './shop/shop.module';

@Module({
  controllers: [V1Controller],
  imports: [ShopModule],
})
export class V1Module {}
