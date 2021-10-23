import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDTO } from './dto/create.client.dto';
import { UpdateClientDTO } from './dto/update.client.dto';
import { Client } from './entities/client.entity';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async createClient(@Body() client: CreateClientDTO): Promise<Client> {
    return this.clientService.createClient(client);
  }

  @Put()
  async updateClient(@Body() client: UpdateClientDTO): Promise<Client> {
    return this.clientService.updateClient(client);
  }

  @Get(':id')
  async getClient(@Param('id') id: string): Promise<Client> {
    return this.clientService.getClient(id);
  }

  @Get('/getAll')
  async getAllClient(): Promise<Client[]> {
    return this.clientService.getAllClient();
  }

  @Delete(':id')
  async removeClient(@Param('id') id: string): Promise<Client> {
    return this.clientService.removeClient(id);
  }
}
