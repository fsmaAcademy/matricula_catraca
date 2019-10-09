import { Module } from '@nestjs/common';
import { SigninController } from './controllers/signin.controller';

@Module({
  controllers: [SigninController],
})
export class SigninModule {}
