import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrpcModule } from './trpc/trpc.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [TrpcModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
