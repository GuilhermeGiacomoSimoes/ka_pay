import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ClientRepository } from './client.repository';
import { ClientService } from './client.service';
import { UpdateClientDTO } from './dto/update.client.dto';

describe('ClientService', () => {
  let service: ClientService;
  let repository: ClientRepository;

  let mockData;
  let mockDataError;

  beforeEach(async () => {
    const ClientRepositoryStub = {
      findById: jest.fn(),
      createClient: jest.fn(),
      updateClient: jest.fn(),
      removeClient: jest.fn(),
      findAllt: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: ClientRepository,
          useFactory: () => ClientRepositoryStub,
        },
      ],
    }).compile();

    service = module.get<ClientService>(ClientService);
    repository = module.get<ClientRepository>(ClientRepository);

    mockData = {
      uuid: expect.any(String),
      name: 'Guilherme',
      birtDate: 1996,
      cpfCnpj: 43345678974,
      addressStreet: 'Rua Conselheiro Saraiva',
      addressNumber: 866,
      addressNeighborhood: 'Centro',
      addressCity: 'Limeira',
      fraudster: false,
      addressState: 'SP',
    };

    mockDataError = {
      qqc: 'teste',
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createClient', () => {
    it('Check save client in bd', async () => {
      await expect(service.createClient(mockData)).resolves.not.toThrow();
    });

    it('Return error if parse incorrect payload', async () => {
      (repository.createClient as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(service.createClient(mockDataError)).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });

  describe('updateCliente', () => {
    it('Check update client in bd', async () => {
      await expect(
        service.updateClient(mockData as UpdateClientDTO),
      ).resolves.not.toThrow();
    });
    it('Return error if parse incorrect payload', async () => {
      (repository.updateClient as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(
        service.updateClient(mockDataError as UpdateClientDTO),
      ).rejects.toThrow(new InternalServerErrorException());
    });
  });

  describe('getClient', () => {
    it('Check get one client', async () => {
      (repository.findById as jest.Mock).mockReturnValueOnce(mockData);
      expect(await service.getClient('1')).toEqual(mockData);
    });
    it('Check error from get one client', async () => {
      (repository.findById as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      expect(service.getClient('4')).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });

  describe('remove Client', () => {
    it('check remove client in bd', async () => {
      await expect(
        service.removeClient('1f6e81eb-ef03-4002-92e1-e3d2e70e8647'),
      ).resolves.not.toThrow();
    });
    it('return error if parse incorrect id', async () => {
      (repository.removeClient as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(service.removeClient(null)).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });
});
