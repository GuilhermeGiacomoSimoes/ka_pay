import { Get, Controller } from '@nestjs/common';
import { ShopList } from './interface/shop-list.interface';

@Controller('shop')
export class ShopController {
  @Get()
  findAll(): ShopList[] {
    return [
      {
        name: 'murilo',
        description: 'teste',
        created_in: new Date(),
      },
    ];
  }
}
