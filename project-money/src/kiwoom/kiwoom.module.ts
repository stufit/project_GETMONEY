import { Module } from '@nestjs/common';
import { KiwoomService } from './kiwoom.service';
import { KiwoomController } from './kiwoom.controller';

@Module({
  providers: [KiwoomService],
  controllers: [KiwoomController]
})
export class KiwoomModule {}
