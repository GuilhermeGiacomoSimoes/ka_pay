import { Controller, Get, Post, Put } from '@nestjs/common';
import { Establishment } from './entities/establishment.entity';
import { EstablishmentService } from './establishment.service';

@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Post()
  createEstablishment(establishment: Establishment): Promise<Establishment> {
    return this.establishmentService.createEstablishment(establishment);
  }

  @Put()
  async updateEstablishment(id: number): Promise<Establishment> {
    return this.updateEstablishment(id);
  }

  @Get()
  async getEstablishment(id: number): Promise<Establishment> {
    return this.establishmentService.getEstablishment(id);
  }

  @Get()
  async getAllEstablishment(): Promise<Establishment[]> {
    return this.establishmentService.getAllEstablishment();
  }
}
