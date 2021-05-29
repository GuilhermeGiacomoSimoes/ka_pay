import { Test, TestingModule } from '@nestjs/testing';
import { EstablishmentService } from './establishment.service';

describe('EstablishmentService', () => {
  let service: EstablishmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstablishmentService],
    }).compile();

    service = module.get<EstablishmentService>(EstablishmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
