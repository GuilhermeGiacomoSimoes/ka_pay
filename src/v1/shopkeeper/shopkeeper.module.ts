import { Module } from '@nestjs/common';
import { ShopkeeperController } from './shopkeeper.controller';
import { ShopKeeperRepository } from './shopkeeper.repository';
import { ShopkeeperService } from './shopkeeper.service';

@Module({
  controllers: [ShopkeeperController],
  providers: [ShopkeeperService, ShopKeeperRepository],
})
export class ShopkeeperModule {}
