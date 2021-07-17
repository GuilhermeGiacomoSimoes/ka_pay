import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Establishment } from './entities/establishment.entity';
import { EstablishmentController } from './establishment.controller';
import { EstablishmentService } from './establishment.service';
import { establishmentRepositoryProvider } from './establishment.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Establishment])],
  providers: [
    EstablishmentService,
    establishmentRepositoryProvider,
    Establishment,
  ],
  controllers: [EstablishmentController],
})
export class EstablishmentModule {}
