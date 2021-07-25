import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateShopkeeperDTO } from './dto/create.shopkeeper.dto';
import { UpdateShopkeeperDTO } from './dto/update.shopkeeper.dto';
import { ShopKeeperRepository } from './shopkeeper.repository';
@Injectable()
export class ShopkeeperService {
  constructor(private readonly shopKeeperRepository: ShopKeeperRepository) {}

  async getShopKeeper(id: number): Promise<any> {
    return await this.shopKeeperRepository.getShopKeeper(id);
  }
  async createShopKeeper(data: CreateShopkeeperDTO): Promise<any> {
    if (data.name.length > 20) {
      throw new BadRequestException(
        'The name must have a maximum of 20 characters',
      );
    }
    return await this.shopKeeperRepository.createShopKeeper(data);
  }
  async updateShopKeeper(data: UpdateShopkeeperDTO): Promise<any> {
    return await this.shopKeeperRepository.updateShopKeeper(data);
  }
  async deleteShopKeeper(id: number): Promise<any> {
    return await this.shopKeeperRepository.deleteShopKeeper(id);
  }
}
