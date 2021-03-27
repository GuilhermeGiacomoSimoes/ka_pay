import { Injectable } from '@nestjs/common';
import { CreateShopkeeper } from './dto/create.shopkeeper.dto';
import { IShopkeeper } from './interface/shopkeeper.interface';

@Injectable()
export class ShopkeeperService {
  createShopkeeper(shopkeeper: CreateShopkeeper): IShopkeeper {
    return {
      uuid: 'fddfbfc6-80bd-4051-8b1e-32048dea8ff7',
      name: 'Company Test',
      email: 'contact@companytest.com',
      document: '11222333444455',
      token: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
      phone: '+000000000000',
      account_type: 1,
    }
  }
}
