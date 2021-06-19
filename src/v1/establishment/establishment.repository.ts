import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Establishment } from './entities/establishment.entity';

@Injectable()
@EntityRepository(Establishment)
export class EstablishmentRepository extends Repository<Establishment> {}
