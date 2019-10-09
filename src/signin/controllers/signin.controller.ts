import { Controller, Get, Req } from '@nestjs/common';

@Controller('signin')
export class SigninController {
  @Get()
  async findUserByName(): Promise<string> {
    return await 'Find User By Name';
  }
}
