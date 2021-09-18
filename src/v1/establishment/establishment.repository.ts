import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateEstablishmentDTO } from './dto/create.establishment.dto';
import { UpdateEstablish } from './dto/update.establishment.dto';
import { Establishment } from './entities/establishment.entity';

@Injectable()
@EntityRepository(Establishment)
export class EstablishmentRepository extends Repository<Establishment> {
  public async findAll(): Promise<Establishment[]> {
    return await this.find();
  }

  public async findById(uuid: string): Promise<Establishment> {
    return await this.findOne(uuid);
  }

  public async createEstablishment(
    establishment: CreateEstablishmentDTO,
  ): Promise<Establishment> {
    return await this.save(establishment);
  }

  public async updateEstablishment(establishment: UpdateEstablish) {
    return await this.save(establishment);
  }

  public async removeEstablishment(uuid: string) {
    const establishment = await this.findOne(uuid);
    return await this.remove(establishment);
  }
}
