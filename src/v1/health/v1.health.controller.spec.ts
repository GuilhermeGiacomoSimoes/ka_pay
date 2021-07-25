import { Test, TestingModule } from '@nestjs/testing';
import { V1HealthController } from './v1.health.controller';

describe('V1HealthController', () => {
  let controller: V1HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [V1HealthController],
    }).compile();

    controller = module.get<V1HealthController>(V1HealthController);
  });

  it.todo('Should be defined');
});
