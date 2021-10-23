import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from '../client/client.controller';
import { ClientRepository } from '../client/client.repository';
import { ClientService } from '../client/client.service';
import { Client } from '../client/entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, ClientRepository])],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
