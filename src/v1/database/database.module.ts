import { Module } from '@nestjs/common';
import { databaseProviders } from './v1.database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders], 
})
export class DatabaseModule {}
