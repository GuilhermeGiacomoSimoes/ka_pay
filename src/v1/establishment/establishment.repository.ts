import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Establishment } from './entities/establishment.entity';

@Injectable()
@EntityRepository(Establishment)
export class EstablishmentRepository extends Repository<Establishment> {
  async getEstablishment(id: number): Promise<Establishment> {
    return new Establishment();
  }

  async createEstablishment(
    establishment: Establishment,
  ): Promise<Establishment> {
    return establishment;
  }

  async updateEstablishment(id: number): Promise<Establishment> {
    return new Establishment();
  }

  async getAllEstablishment(): Promise<Establishment[]> {
    return [];
  }
}
