import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateShopkeeper } from '../dto/create.shopkeeper.dto';
import { ShopKeeper } from '../entities/shopkeeper.entity';
import { ShopKeeperRepository } from '../repository/shopkeeper.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ShopkeeperService {
  constructor(
    @InjectRepository(ShopKeeperRepository)
    private shopKeeperRepository: ShopKeeperRepository,
  ) {}

  async getShopKeeper(id: number): Promise<ShopKeeper> {
    return await this.shopKeeperRepository.getShopKeeper(id);
  }

  async createShopKeeper(data: CreateShopkeeper): Promise<ShopKeeper> {
    if (data.name.length > 20) {
      throw new BadRequestException(
        'The name must have a maximum of 20 characters',
      );
    }

    return await this.shopKeeperRepository.createShopKeeper(data);
  }
}
