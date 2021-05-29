import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ShopKeeper } from './entities/shopkeeper.entity';
import { ShopKeeperRepository } from './shopkeeper.repository';
import { ShopkeeperService } from './shopkeeper.service';

describe('ShopkeeperService', () => {
  let service: ShopkeeperService;
  let repository: ShopKeeperRepository;
  let mockData;

  beforeEach(async () => {
    const ShopKeeperRepositoryStub = {
      getShopKeeper: jest.fn(),
      createShopKeeper: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShopkeeperService,
        {
          provide: ShopKeeperRepository,
          useFactory: () => ShopKeeperRepositoryStub,
        },
      ],
    }).compile();

    service = module.get<ShopkeeperService>(ShopkeeperService);
    repository = module.get<ShopKeeperRepository>(ShopKeeperRepository);
    mockData = {
      uuid: expect.any(String),
      name: 'Company Test',
      email: 'contact@companytest.com',
      document: '11222333444455',
      token: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
      phone: '+000000000000',
      account_type: 1,
    } as ShopKeeper;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getShopKeeper', () => {
    it('Should throw if repository throws', async () => {
      (repository.getShopKeeper as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(service.getShopKeeper(4)).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });

    it('Should not throw if repository returns', async () => {
      await expect(service.getShopKeeper(1)).resolves.not.toThrow();
    });

    it('Should be called with correct params', async () => {
      await service.getShopKeeper(1);
      expect(repository.getShopKeeper).toBeCalledWith(1);
    });

    it('Should return when repository returns', async () => {
      (repository.getShopKeeper as jest.Mock).mockReturnValueOnce(mockData);
      expect(await service.getShopKeeper(1)).toEqual(mockData);
    });
  });

  describe('createShopKeeper', () => {
    it('should throw if repository throws', async () => {
      (repository.createShopKeeper as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(service.createShopKeeper(mockData)).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });

    it('Should throw if name length is greater than 20 characters', async () => {
      mockData.name = 'Teste de nome maior que 20 caracteres';
      await expect(service.createShopKeeper(mockData)).rejects.toThrow(
        new BadRequestException(
          'The name must have a maximum of 20 characters',
        ),
      );
    });
  });
});
