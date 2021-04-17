import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [V1Module, TerminusModule, TypeOrmModule.forRoot({
		type: 'mysql',
		host: 'mysql',
		port: 3306,
		username: 'root',
		password: 'root',
		database: 'ka_pay',
		entities: [],
		synchronize: true,
	})],
  controllers: [],
  providers: [],
})
export class AppModule {}
