import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { CreateEstablishmentDTO } from './dto/create.establishment.dto';
import { UpdateEstablish } from './dto/update.establishment.dto';
import { Establishment } from './entities/establishment.entity';

@Injectable()
@EntityRepository(Establishment)
export class EstablishmentRepository {
  constructor(
    @InjectRepository(Establishment)
    private repositoryORM: Repository<Establishment>,
  ) {}

  public async findAll(): Promise<Establishment[]> {
    return await this.repositoryORM.find();
  }

  public async findById(uuid: string): Promise<Establishment> {
    return await this.repositoryORM.findOne(uuid);
  }

  public async createEstablishment(
    establishment: CreateEstablishmentDTO,
  ): Promise<Establishment> {
    return await this.repositoryORM.save(establishment);
  }

  public async updateEstablishment(establishment: UpdateEstablish) {
    return await this.repositoryORM.save(establishment);
  }

  public async removeEstablishment(uuid: string) {
    const establishment = await this.repositoryORM.findOne(uuid);
    return await this.repositoryORM.remove(establishment);
  }
}
