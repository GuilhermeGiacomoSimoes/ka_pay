import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Establishment } from './entities/establishment.entity';
import { UpdateEstablish } from './dto/update.establishment.dto';
import { CreateEstablishmentDTO } from './dto/create.establishment.dto';
import { EstablishmentRepository } from './establishment.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstablishmentService {
  constructor(
    @InjectRepository(EstablishmentRepository)
    private establishmentRepository: EstablishmentRepository,
  ) {}

  async createEstablishment(
    establishment: CreateEstablishmentDTO,
  ): Promise<Establishment> {
    try {
      return await this.establishmentRepository.createEstablishment(
        establishment,
      );
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async updateEstablishment(
    establishment: UpdateEstablish,
  ): Promise<Establishment> {
    try {
      return await this.establishmentRepository.updateEstablishment(
        establishment,
      );
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async getEstablishment(id: string): Promise<Establishment> {
    try {
      return await this.establishmentRepository.findById(id);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async getAllEstablishment(): Promise<Establishment[]> {
    try {
      return await this.establishmentRepository.findAll();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async removeEstablishment(id: string): Promise<any> {
    try {
      return await this.establishmentRepository.removeEstablishment(id);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
