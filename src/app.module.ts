import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configMySqlLocal } from 'ormconfig';

@Module({
  imports: [V1Module, TerminusModule, TypeOrmModule.forRoot(configMySqlLocal)],
  controllers: [],
  providers: [],
})
export class AppModule {}
