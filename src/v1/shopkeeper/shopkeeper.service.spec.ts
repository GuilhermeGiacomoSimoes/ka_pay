import { Test, TestingModule } from '@nestjs/testing';
import { ShopkeeperService } from './shopkeeper.service';

describe('ShopkeeperService', () => {
  let service: ShopkeeperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopkeeperService],
    }).compile();

    service = module.get<ShopkeeperService>(ShopkeeperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be add a shopkeeper', () => {
    const shopkeeper = {
      name: 'Company Test',
      email: 'contact@companytest.com',
      document: '11222333444455',
      phone: '+000000000000',
      account_type: 1,
      passkey: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
    };

    const expected = {
      uuid: 'fddfbfc6-80bd-4051-8b1e-32048dea8ff7',
      name: 'Company Test',
      email: 'contact@companytest.com',
      document: '11222333444455',
      token: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
      phone: '+000000000000',
      account_type: 1,
    };

    expect(service.createShopkeeper(shopkeeper)).toStrictEqual(expected);
  });
});
