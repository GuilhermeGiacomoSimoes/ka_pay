import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateEstablishmentDTO } from './dto/create.establishment.dto';
import { EstablishmentRepository } from './establishment.repository';
import { EstablishmentService } from './establishment.service';

describe('EstablishmentService', () => {
  let service: EstablishmentService;
  let repository: EstablishmentRepository;
  let mockData: Object;
  let mockDataError: Object;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstablishmentService],
    }).compile();

    service = module.get<EstablishmentService>(EstablishmentService);
    repository = module.get<EstablishmentRepository>(EstablishmentRepository);

    mockData = {
      uuid: expect.any(String),
      name: 'KaBuM!',
      street: 'Rua Carlos Gomes',
      number: 123,
      cnpj: '123/100',
      city: 'Limeira',
      IE: 123,
    };

    mockDataError = {
      marcao: 'teste',
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createEstablishment', () => {
    it('Check save establishment in bd', async () => {
      await expect(
        repository.createEstablishment(mockData as CreateEstablishmentDTO),
      ).resolves.not.toThrow();
    });

    it('Return error if parse incorrect payload', async () => {
      await expect(
        repository.createEstablishment(mockDataError as CreateEstablishmentDTO),
      ).resolves.toThrow();
    });
  });
});
