import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ORM_CONFIG } from './settings/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ORM_CONFIG),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
