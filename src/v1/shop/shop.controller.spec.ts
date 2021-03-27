import { Test, TestingModule } from '@nestjs/testing';
import { ShopController } from './shop.controller';

describe('ShopController', () => {
  let controller: ShopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopController],
    }).compile();

    controller = module.get<ShopController>(ShopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return shop list if GET method called', () => {
    const result = [
      {
        name: 'murilo',
        description: 'teste',
        created_in: new Date(),
      },
      {
        name: 'luis',
        description: 'teste2',
        created_in: new Date(),
      },
    ];
    jest.spyOn(controller, 'findAll').mockImplementation(() => result);

    expect(controller.findAll()).toBe(result);
  });
});
