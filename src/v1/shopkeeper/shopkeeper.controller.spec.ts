import { Test, TestingModule } from '@nestjs/testing';
import { ShopkeeperController } from './shopkeeper.controller';

describe('ShopkeeperController', () => {
  let controller: ShopkeeperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopkeeperController],
    }).compile();

    controller = module.get<ShopkeeperController>(ShopkeeperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
