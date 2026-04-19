import { Injectable } from '@nestjs/common';
import { json } from 'stream/consumers';


// @Injectable() decorator is used to mark a class as a provider
// it manages the lifecycle of the class
// for dependency injection
// it is a singleton by default means only one instance of the class is created
// and shared across the application
// used for business logic 
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getName(): string {
    return JSON.stringify({ name: 'John Doe' });
  }
}
