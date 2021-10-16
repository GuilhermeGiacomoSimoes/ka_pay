import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientRepository } from './client.repository';
import { CreateClientDTO } from './dto/create.client.dto';
import { UpdateClientDTO } from './dto/update.client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async createClient(client: CreateClientDTO): Promise<Client> {
    try {
      return await this.clientRepository.createClient(client);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async updateClient(client: UpdateClientDTO): Promise<Client> {
    try {
      return await this.clientRepository.updateClient(client);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async getClient(id: string): Promise<Client> {
    try {
      return await this.clientRepository.findById(id);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async getAllClient(): Promise<Client[]> {
    try {
      return await this.clientRepository.findAll();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async removeClient(id: string): Promise<any> {
    try {
      return await this.clientRepository.removeClient(id);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
