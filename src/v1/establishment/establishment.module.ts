import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Establishment } from './entities/establishment.entity';
import { EstablishmentController } from './establishment.controller';
import { EstablishmentRepository } from './establishment.repository';
import { EstablishmentService } from './establishment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Establishment])],
  providers: [EstablishmentService, EstablishmentRepository, Establishment],
  controllers: [EstablishmentController],
})
export class EstablishmentModule {}
