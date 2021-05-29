import { Injectable } from '@nestjs/common';
import { Establishment } from './entities/establishment.entity';
import { EstablishmentRepository } from './establishment.repository';

@Injectable()
export class EstablishmentService {
  constructor(
    private readonly establishmentRepository: EstablishmentRepository,
  ) {}

  async createEstablishment(id: number): Promise<Establishment> {
    return await this.establishmentRepository.getEstablishment(id);
  }

  async getEstablishment(id: number): Promise<Establishment> {
    return await this.establishmentRepository.getEstablishment(id);
  }

  async getAllEstablishment(): Promise<Establishment[]> {
    return await this.establishmentRepository.getAllEstablishment();
  }
}
