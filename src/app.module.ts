import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SigninModule } from './signin/signin.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    SigninModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
