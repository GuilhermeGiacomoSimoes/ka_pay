import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private helth: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get('/ping-check')
  @HealthCheck()
  check() {
    return this.helth.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
}
