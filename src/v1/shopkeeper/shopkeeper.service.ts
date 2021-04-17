import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateShopkeeper } from './dto/create.shopkeeper.dto';
import { ShopKeeper } from './entities/shopkeeper.entity';

export class ShopKeeperRepository {
  async getShopKeeper (id: number): Promise<ShopKeeper> {
    return new ShopKeeper()
  }

  async createShopKeeper(data: CreateShopkeeper): Promise<ShopKeeper> {
    return new ShopKeeper()
  }
}

@Injectable()
export class ShopkeeperService {

  constructor(private readonly shopKeeperRepository:ShopKeeperRepository) {}

  async getShopKeeper(id: number): Promise<ShopKeeper> {
    return await this.shopKeeperRepository.getShopKeeper(id)
  }

  async createShopKeeper(data: CreateShopkeeper): Promise<ShopKeeper> {

    if (data.name.length > 20) {
      throw new BadRequestException('The name must have a maximum of 20 characters')
    }

    return await this.shopKeeperRepository.createShopKeeper(data)


  }

}
