import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { CreateClientDTO } from './dto/create.client.dto';
import { UpdateClientDTO } from './dto/update.client.dto';

@Injectable()
@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  public async findAll(): Promise<Client[]> {
    return await this.find();
  }

  public async findById(uuid: string): Promise<Client> {
    return await this.findOne(uuid);
  }

  public async createClient(client: CreateClientDTO): Promise<Client> {
    return await this.save(client);
  }

  public async updateClient(client: UpdateClientDTO): Promise<Client> {
    return await this.save(client);
  }

  public async removeClient(uuid: string) {
    const client = await this.findOne(uuid);
    return await this.remove(client);
  }
}
