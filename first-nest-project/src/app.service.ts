import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // as
    console.log('hello word');

    return 'Hello World!';
  }
}
