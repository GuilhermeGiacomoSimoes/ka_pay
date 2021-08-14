import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Establishment } from './entities/establishment.entity';
import { EstablishmentController } from './establishment.controller';
import { EstablishmentService } from './establishment.service';
import { EstablishmentRepository } from './establishment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Establishment, EstablishmentRepository])],
  providers: [EstablishmentService],
  controllers: [EstablishmentController],
})
export class EstablishmentModule {}
