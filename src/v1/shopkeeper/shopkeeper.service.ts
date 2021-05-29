import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateShopkeeper } from './dto/create.shopkeeper.dto';
import { ShopKeeperRepository } from './shopkeeper.repository';
@Injectable()
export class ShopkeeperService {
  constructor(private readonly shopKeeperRepository: ShopKeeperRepository) {}

  async getShopKeeper(id: number): Promise<any> {
    return await this.shopKeeperRepository.getShopKeeper(id);
  }
  async createShopKeeper(data: CreateShopkeeper): Promise<any> {
    if (data.name.length > 20) {
      throw new BadRequestException(
        'The name must have a maximum of 20 characters',
      );
    }
    return await this.shopKeeperRepository.createShopKeeper(data);
  }
}
