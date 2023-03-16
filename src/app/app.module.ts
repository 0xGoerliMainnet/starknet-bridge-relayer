import { Module } from '@nestjs/common';
import { HealthModule } from 'common/health';
import { ConfigModule } from 'common/config';
import { LoggerModule } from 'common/logger';
import { PrometheusModule } from 'common/prometheus';
import { HTTPModule } from '../http';
import { AppService } from './app.service';

@Module({
  imports: [HTTPModule, HealthModule, LoggerModule, PrometheusModule, ConfigModule],
  providers: [AppService],
})
export class AppModule {}
