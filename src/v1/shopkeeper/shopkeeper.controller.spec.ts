import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ShopkeeperController } from './shopkeeper.controller';
import { ShopkeeperService } from './shopkeeper.service';

describe('ShopkeeperController', () => {
  let controller: ShopkeeperController;
  let service: ShopkeeperService;
  let mockData;

  beforeEach(async () => {
    const mockService = {
      getShopKeeper: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopkeeperController],
      providers: [
        {
          provide: ShopkeeperService,
          useFactory: () => mockService,
        },
      ],
    }).compile();

    controller = module.get<ShopkeeperController>(ShopkeeperController);
    service = module.get<ShopkeeperService>(ShopkeeperService);
    mockData = {
      name: expect.any(String),
      email: 'contact@companytest.com',
      document: '11222333444455',
      token: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
      phone: '+000000000000',
      account_type: 1,
    };
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getShopKeeper()', () => {
    it('Should throw when service throws', async () => {
      (service.getShopKeeper as jest.Mock).mockRejectedValueOnce(
        new BadRequestException(),
      );
      await expect(controller.getShopKeeper(1)).rejects.toThrow(
        new BadRequestException(),
      );
    });

    it('Should call service with correct params', async () => {
      await controller.getShopKeeper(1);
      expect(service.getShopKeeper).toBeCalledWith(1);
    });

    it('Should return when service returns', async () => {
      (service.getShopKeeper as jest.Mock).mockReturnValueOnce(mockData);
      expect(await controller.getShopKeeper(1)).toEqual(mockData);
    });
  });

  describe('createShopKeeper()', () => {
    it.todo('Should throw when service throws');

    it.todo('Should call service with correct params');

    it.todo('Should return when service returns');
  });

  describe('updateShopKeeper()', () => {
    it.todo('Should throw when service throws');

    it.todo('Should call service with correct params');

    it.todo('Should return when service returns');
  });

  describe('deleteShopKeeper()', () => {
    it.todo('Should throw when service throws');

    it.todo('Should call service with correct params');
  });
});
