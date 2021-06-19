import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateEstablishment } from './dto/create.establishment.dto';
import { UpdateEstablish } from './dto/update.establishment.dto';
import { Establishment } from './entities/establishment.entity';
import { EstablishmentService } from './establishment.service';

@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Post()
  async createEstablishment(
    @Body() establishment: CreateEstablishment,
  ): Promise<Establishment> {
    return this.establishmentService.createEstablishment(establishment);
  }

  @Put()
  async updateEstablishment(
    @Body() establishment: UpdateEstablish,
  ): Promise<Establishment> {
    return this.establishmentService.updateEstablishment(establishment);
  }

  @Get()
  async getEstablishment(@Param('id') id: string): Promise<Establishment> {
    return this.establishmentService.getEstablishment(id);
  }

  @Get()
  async getAllEstablishment(): Promise<Establishment[]> {
    return this.establishmentService.getAllEstablishment();
  }
}
