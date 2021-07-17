import { Inject, Injectable } from '@nestjs/common';
import { Establishment } from './entities/establishment.entity';
import { UpdateEstablish } from './dto/update.establishment.dto';
import { CreateEstablishmentDTO } from './dto/create.establishment.dto';
import { EstablishmentRepository } from './establishment.repository';

@Injectable()
export class EstablishmentService {
  constructor(
    @Inject('EstablishmentRepositoryProvider')
    private readonly establishmentRepository: EstablishmentRepository,
  ) {}

  async createEstablishment(
    establishment: CreateEstablishmentDTO,
  ): Promise<Establishment> {
    try {
      return await this.establishmentRepository.createEstablishment(
        establishment,
      );
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async updateEstablishment(
    establishment: UpdateEstablish,
  ): Promise<Establishment> {
    return await this.establishmentRepository.updateEstablishment(
      establishment,
    );
  }

  async getEstablishment(id: string): Promise<Establishment> {
    return await this.establishmentRepository.findById(id);
  }

  async getAllEstablishment(): Promise<Establishment[]> {
    return await this.establishmentRepository.findAll();
  }

  async removeEstablishment(id: string): Promise<any> {
    return await this.establishmentRepository.removeEstablishment(id);
  }
}
