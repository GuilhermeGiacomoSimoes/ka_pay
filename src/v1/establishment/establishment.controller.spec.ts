import { Test, TestingModule } from '@nestjs/testing';
import { EstablishmentController } from './establishment.controller';
import { EstablishmentService } from './establishment.service';
import { CreateEstablishmentDTO } from './dto/create.establishment.dto';
import { UpdateEstablish } from './dto/update.establishment.dto';
import { InternalServerErrorException } from '@nestjs/common';

describe('EstablishmentController', () => {
  let controller: EstablishmentController;
  let service: EstablishmentService;
  let mockData: Object;
  let mockDataError: Object;

  beforeEach(async () => {
    const EstablishmentServiceStub = {
      getEstablishment: jest.fn(),
      createEstablishment: jest.fn(),
      updateEstablishment: jest.fn(),
      removeEstablishment: jest.fn(),
      getAllEstablishment: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstablishmentController],
      providers: [
        EstablishmentService,
        {
          provide: EstablishmentService,
          useFactory: () => EstablishmentServiceStub,
        },
      ],
    }).compile();

    controller = module.get<EstablishmentController>(EstablishmentController);
    service = module.get<EstablishmentService>(EstablishmentService);

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
    expect(controller).toBeDefined();
  });

  describe('createEstablishment', () => {
    it('Check save establishment in bd', async () => {
      await expect(
        controller.createEstablishment(mockData as CreateEstablishmentDTO),
      ).resolves.not.toThrow();
    });

    it('Return error if parse incorrect payload', async () => {
      (service.createEstablishment as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(
        controller.createEstablishment(mockDataError as CreateEstablishmentDTO),
      ).rejects.toThrow(new InternalServerErrorException());
    });
  });

  describe('updateEstablishment', () => {
    it('Check update establishment in bd', async () => {
      await expect(
        controller.updateEstablishment(mockData as UpdateEstablish),
      ).resolves.not.toThrow();
    });

    it('Return error if parse incorrect payload', async () => {
      (service.updateEstablishment as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(
        controller.updateEstablishment(mockDataError as UpdateEstablish),
      ).rejects.toThrow(new InternalServerErrorException());
    });
  });

  describe('getEstablishment', () => {
    it('check get one establishment', async () => {
      (service.getEstablishment as jest.Mock).mockReturnValueOnce(mockData);
      expect(await controller.getEstablishment('1')).toEqual(mockData);
    });
    it('check error from get one establishment', async () => {
      (service.getEstablishment as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );

      expect(controller.getEstablishment('4')).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });

  describe('remove Establishment', () => {
    it('Check remove establishment in bd', async () => {
      await expect(
        controller.removeEstablishment('1f6e81eb-ef03-4002-92e1-e3d2e70e8647'),
      ).resolves.not.toThrow();
    });

    it('Return error if parse incorrect id', async () => {
      (service.removeEstablishment as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(controller.removeEstablishment(null)).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });

  describe('get all Establishments', () => {
    it('Check get all establishments', async () => {
      await expect(controller.getAllEstablishment()).resolves.not.toThrow();
    });

    it('Return error if parse incorrect id', async () => {
      (service.getAllEstablishment as jest.Mock).mockRejectedValueOnce(
        new InternalServerErrorException(),
      );
      await expect(controller.getAllEstablishment()).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });
});
