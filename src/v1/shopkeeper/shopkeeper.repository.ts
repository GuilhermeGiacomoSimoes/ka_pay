import { EntityRepository, Repository } from 'typeorm';
import { CreateShopkeeper } from './dto/create.shopkeeper.dto';
import { ShopKeeper } from './entities/shopkeeper.entity';

@EntityRepository(ShopKeeper)
export class ShopKeeperRepository extends Repository<ShopKeeper> {
  async getShopKeeper(id: number): Promise<ShopKeeper> {
    return new ShopKeeper();
  }

  async createShopKeeper(data: CreateShopkeeper): Promise<ShopKeeper> {
    return new ShopKeeper();
  }
}
