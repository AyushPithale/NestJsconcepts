import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  // constructor is used for dependency injection
  // private readonly appService: AppService --> this is dependency injection
  // the Appservice is used to get the data from the database
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {

    // using the injected service to get the data from getHello() method
    return this.appService.getHello();
  }


  @Get('name')
  getName(): string {
    return this.appService.getName();
  }
}
