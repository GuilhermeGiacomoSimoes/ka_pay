import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configMySQLDocker } from 'ormconfig';
import { EstablishmentModule } from './v1/establishment/establishment.module';

@Module({
  imports: [
    V1Module,
    TerminusModule,
    TypeOrmModule.forRoot(configMySQLDocker),
    EstablishmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
