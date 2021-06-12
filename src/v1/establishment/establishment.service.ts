import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Establishment } from './entities/establishment.entity';
import { EstablishmentRepository } from './establishment.repository';

@Injectable()
export class EstablishmentService {
  constructor(
    @InjectRepository(EstablishmentRepository)
    private establishmentRepository: EstablishmentRepository,
  ) {}

  async createEstablishment(
    establishment: Establishment,
  ): Promise<Establishment> {
    return await this.establishmentRepository.createEstablishment(
      establishment,
    );
  }

  async updateEstablishment(id: number): Promise<Establishment> {
    return await this.establishmentRepository.updateEstablishment(id);
  }

  async getEstablishment(id: number): Promise<Establishment> {
    return await this.establishmentRepository.getEstablishment(id);
  }

  async getAllEstablishment(): Promise<Establishment[]> {
    return await this.establishmentRepository.getAllEstablishment();
  }
}
