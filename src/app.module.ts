import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';


// this is the root module of the application that
// imports other modules

// this wil group rrelated grp and modules together
// module is a class that is decorated with @Module()
// module --> groups of related components

@Module({
  imports: [BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
