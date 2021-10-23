import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { CreateClientDTO } from './dto/create.client.dto';
import { UpdateClientDTO } from './dto/update.client.dto';

describe('ClientController', () => {
  let controller: ClientController;
  let service: ClientService;
  let mockData;
  let mockDataError;

  beforeEach(async () => {
    const ClientServiceStub = {
      createClient: jest.fn(),
      updateClient: jest.fn(),
      getClient: jest.fn(),
      getAllClient: jest.fn(),
      removeClient: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [
        ClientService,
        {
          provide: ClientService,
          useFactory: () => ClientServiceStub,
        },
      ],
    }).compile();

    controller = module.get<ClientController>(ClientController);
    service = module.get<ClientService>(ClientService);

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
    } as Object;

    mockDataError = {
      ap: 'teste',
    } as Object;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createClient', () => {
    it('Check save client in bd', async () => {
      await expect(
        controller.createClient(mockData as CreateClientDTO),
      ).resolves.not.toThrow();
    });

    it('Check error if parse incorrect payload', async () => {
      (service.createClient as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(
        controller.createClient(mockDataError as CreateClientDTO),
      ).rejects.toThrow(new InternalServerErrorException());
    });
  });

  describe('updateClient', () => {
    it('Check update client', async () => {
      await expect(
        controller.updateClient(mockData as UpdateClientDTO),
      ).resolves.not.toThrow();
    });
    it('Check error on update', async () => {
      (service.updateClient as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(
        controller.updateClient(mockDataError as UpdateClientDTO),
      ).rejects.toThrow(new InternalServerErrorException());
    });
  });

  describe('delete', () => {
    it('Check delete client', async () => {
      await expect(
        controller.removeClient('1f6e81eb-ef03-4002-92e1-e3d2e70e8647'),
      ).resolves.not.toThrow();
    });
    it('Check error on delete', async () => {
      (service.removeClient as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(controller.removeClient('1')).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });
});
