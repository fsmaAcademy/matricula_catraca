import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/caio')
  getHello(): {} {
    return this.appService.getHello();
  }
}
