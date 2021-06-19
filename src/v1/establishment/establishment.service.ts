import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Establishment } from './entities/establishment.entity';
import { UpdateEstablish } from './dto/update.establishment.dto';
import { Repository } from 'typeorm';
import { CreateEstablishment } from './dto/create.establishment.dto';

@Injectable()
export class EstablishmentService {
  constructor(
    @InjectRepository(Establishment)
    private establishmentRepository: Repository<Establishment>,
  ) {}

  async createEstablishment(
    establishment: CreateEstablishment,
  ): Promise<Establishment> {
    try {
      return await this.establishmentRepository.save(establishment);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async updateEstablishment(
    establishment: UpdateEstablish,
  ): Promise<Establishment> {
    return await this.establishmentRepository.save(establishment);
  }

  async getEstablishment(id: string): Promise<Establishment> {
    try {
      return await this.establishmentRepository.findOneOrFail(id);
    } catch (err) {
      throw err;
    }
  }

  async getAllEstablishment(): Promise<Establishment[]> {
    return await this.establishmentRepository.find();
  }

  async removeEstablishment(id: string): Promise<any> {
    return await this.establishmentRepository.delete(id);
  }
}
