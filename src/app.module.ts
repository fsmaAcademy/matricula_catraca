import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbSettings } from './settigns/db.settings';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DbSettings.postgreConnection(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
