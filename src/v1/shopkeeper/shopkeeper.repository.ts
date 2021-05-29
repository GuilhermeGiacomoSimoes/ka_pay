import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateShopkeeperDTO } from './dto/create.shopkeeper.dto';
import { UpdateShopkeeperDTO } from './dto/update.shopkeeper.dto';
import { ShopKeeper } from './entities/shopkeeper.entity';

@EntityRepository(ShopKeeper)
export class ShopKeeperRepository extends Repository<ShopKeeper> {
  async getShopKeeper(id: number): Promise<ShopKeeper> {
    return new ShopKeeper();
  }

  async createShopKeeper(data: CreateShopkeeperDTO): Promise<ShopKeeper> {
    return new ShopKeeper();
  }

  async updateShopKeeper(data: UpdateShopkeeperDTO): Promise<ShopKeeper> {
    return new ShopKeeper();
  }
}
