import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


// this is the root module of the application that
// imports other modules


// module is a class that is decorated with @Module()
// module --> groups of related components

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
