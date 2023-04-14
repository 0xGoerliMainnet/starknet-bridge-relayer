import { Injectable, LoggerService, Inject } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { RelayerService } from 'relayer/relayer.service';

@Injectable()
export class CronService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly relayerService: RelayerService,
  ) {}

  @Timeout(10000)
  async relayer() {
    this.logger.log('Start the relayer job.');
    await this.relayerService.run();
  }
}