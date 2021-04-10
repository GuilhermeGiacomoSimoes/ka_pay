import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('v1')
export class V1HealthController {
  constructor(
    private helth: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
  ) {}

  @Get('/ping')
  @HealthCheck()
  ping() {
    return this.helth.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }

  @Get('/database')
  @HealthCheck()
  database() {
    return this.helth.check([() => this.db.pingCheck("kpay")]);
  }
}
