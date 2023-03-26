import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KiwoomModule } from './kiwoom/kiwoom.module';

@Module({
  imports: [KiwoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
