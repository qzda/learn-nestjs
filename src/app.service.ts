import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(obj?: object): string {
    if (obj) return JSON.stringify(obj)
    return 'Hello World!'
  }
}
