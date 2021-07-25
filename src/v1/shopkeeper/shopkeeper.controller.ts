import { Controller, Get, Param } from '@nestjs/common';
import { ShopKeeper } from './entities/shopkeeper.entity';
import { ShopkeeperService } from './shopkeeper.service';

@Controller('shopkeeper')
export class ShopkeeperController {
  constructor(private readonly shopKeeperService: ShopkeeperService) {}

  @Get('/:id')
  async getShopKeeper(@Param('id') id: number): Promise<ShopKeeper> {
    return await this.shopKeeperService.getShopKeeper(id);
  }
}
