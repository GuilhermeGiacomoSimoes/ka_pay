import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configMySQLDocker } from 'ormconfig';
import { EstablishmentModule } from './v1/establishment/establishment.module';
import { ClientController } from './client/client.controller';
import { ClientService } from './v1/client/client.service';

@Module({
  imports: [
    V1Module,
    TerminusModule,
    TypeOrmModule.forRoot(configMySQLDocker),
    EstablishmentModule,
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class AppModule {}
