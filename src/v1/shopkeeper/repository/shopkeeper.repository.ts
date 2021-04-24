import { ShopKeeper } from '../entities/shopkeeper.entity';
import { CreateShopkeeper } from '../dto/create.shopkeeper.dto';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(ShopKeeper)
export class ShopKeeperRepository extends Repository<ShopKeeper> {
  async getShopKeeper(id: number): Promise<ShopKeeper> {
    return new ShopKeeper();
  }

  async createShopKeeper(data: CreateShopkeeper): Promise<ShopKeeper> {
    return new ShopKeeper();
  }
}
