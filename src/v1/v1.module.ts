import { Module } from '@nestjs/common';
import { V1Controller } from './v1.controller';

@Module({
  controllers: [V1Controller]
})
export class V1Module {}
