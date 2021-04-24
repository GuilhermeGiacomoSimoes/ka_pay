import { Module } from '@nestjs/common';
import { ShopkeeperController } from './controller/shopkeeper.controller';
import { ShopkeeperService } from './service/shopkeeper.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopKeeperRepository } from './repository/shopkeeper.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ShopKeeperRepository])],
  controllers: [ShopkeeperController],
  providers: [ShopkeeperService],
})
export class ShopkeeperModule {}
