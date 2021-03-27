import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';

@Controller('v1/health')
export class HealthController {
  constructor(
    private helth: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get('/ping')
  @HealthCheck()
  check() {
    return this.helth.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
}
