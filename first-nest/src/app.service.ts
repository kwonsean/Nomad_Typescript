import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NEST!!!';
  }
  getHi(): string {
    return 'HI NEST!!';
  }
}
