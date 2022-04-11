/*
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 데코레이터와 함수는 붙어있어야 한다 (개행 X)
  // hi url에 접속하면 getHi()가 실행된다. 실제 실행될 로직(함수)는 app.service.ts 파일에 작성한다.
  // 이때 getHi() 처럼 이름을 통일하는것을 권장함
  @Get('/hi')
  getHi(): string {
    return this.appService.getHi();
  }
}
*/
