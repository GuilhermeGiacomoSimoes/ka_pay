import { Module } from '@nestjs/common';
import { ShopkeeperController } from './shopkeeper.controller';
import { ShopkeeperService } from './shopkeeper.service';

@Module({
  controllers: [ShopkeeperController],
  providers: [ShopkeeperService]
})
export class ShopkeeperModule {}
