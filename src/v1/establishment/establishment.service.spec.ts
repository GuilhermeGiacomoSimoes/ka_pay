import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UpdateEstablish } from './dto/update.establishment.dto';
import { EstablishmentRepository } from './establishment.repository';
import { EstablishmentService } from './establishment.service';

describe('EstablishmentService', () => {
  let service: EstablishmentService;
  let repository: EstablishmentRepository;
  let mockData;
  let mockDataError;

  beforeEach(async () => {
    const EstablishmentRepositoryStub = {
      findById: jest.fn(),
      createEstablishment: jest.fn(),
      updateEstablishment: jest.fn(),
      removeEstablishment: jest.fn(),
      findAll: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstablishmentService,
        {
          provide: EstablishmentRepository,
          useFactory: () => EstablishmentRepositoryStub,
        },
      ],
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
    } as Object;

    mockDataError = {
      marcao: 'teste',
    } as Object;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createEstablishment', () => {
    it('Check save establishment in bd', async () => {
      await expect(
        service.createEstablishment(mockData),
      ).resolves.not.toThrow();
    });

    it('Return error if parse incorrect payload', async () => {
      (repository.createEstablishment as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(service.createEstablishment(mockDataError)).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });

  describe('updateEstablishment', () => {
    it('Check update establishment in bd', async () => {
      await expect(
        service.updateEstablishment(mockData as UpdateEstablish),
      ).resolves.not.toThrow();
    });

    it('Return error if parse incorrect payload', async () => {
      (repository.updateEstablishment as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(
        service.updateEstablishment(mockDataError as UpdateEstablish),
      ).rejects.toThrow(new InternalServerErrorException());
    });
  });

  describe('getEstablishment', () => {
    it('check get one establishment', async () => {
      (repository.findById as jest.Mock).mockReturnValueOnce(mockData);
      expect(await service.getEstablishment('1')).toEqual(mockData);
    });
    it('check error from get one establishment', async () => {
      (repository.findById as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );

      expect(service.getEstablishment('4')).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });

  describe('remove Establishment', () => {
    it('Check remove establishment in bd', async () => {
      await expect(
        service.removeEstablishment('1f6e81eb-ef03-4002-92e1-e3d2e70e8647'),
      ).resolves.not.toThrow();
    });

    it('Return error if parse incorrect id', async () => {
      (repository.removeEstablishment as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(service.removeEstablishment(null)).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });

  describe('get all Establishments', () => {
    it('Check get all establishments', async () => {
      await expect(service.getAllEstablishment()).resolves.not.toThrow();
    });

    it('Return error if parse incorrect id', async () => {
      (repository.findAll as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(service.getAllEstablishment()).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });
});
