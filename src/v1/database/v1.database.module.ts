import { Module } from '@nestjs/common';
import { v1DatabaseProviders } from './v1.database.providers';

@Module({
  providers: [...v1DatabaseProviders],
  exports: [...v1DatabaseProviders], 
})

export class V1DatabaseModule {}
